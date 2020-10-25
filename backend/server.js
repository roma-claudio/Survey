var http = require('http');
var url = require('url');
var mysql = require('mysql');

//Create connetion
var con = mysql.createConnection({
    host: "localhost",
    user: "user", //TODO change user name
    password: "user_password" //TODO change password
  });

  con.connect(function(err) {
    if (err) throw err;

    //Create Database
    con.query("CREATE DATABASE IF NOT EXISTS survey_db", function (err, result) {
      if (err) throw err;

      con = mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "user_password",
        database: "survey_db"
      });

      //Create Question Table  
      con.query("CREATE TABLE IF NOT EXISTS questions (pk_question VARCHAR(255), question VARCHAR(255), fk_answer VARCHAR(255))", function (err, result) {
        if (err) throw err;

        //Insert Questions
        con.query("INSERT INTO questions (pk_question, question, fk_answer) VALUES ('1', 'How often do you eat meat and dairy?','1'),('2','How big are your portions sizes?','2'),('3','How much food ends up wasted in your household?','3'),('4','How often do you eat avocados, asparagus, kiwi fruit or pineapples?','1')", function (err, result) {
            if (err) throw err;
        });

      });

      //Create Answer Table  
      con.query("CREATE TABLE IF NOT EXISTS answers (pk_answer VARCHAR(255), answer VARCHAR(255))", function (err, result) {
        if (err) throw err;

        //Insert Answers
        con.query("INSERT INTO answers (pk_answer, answer) VALUES ('1','Daily'),('1','1 or 2 times'),('1','3+ times per week'),('1','Not at all'),('2','Smaller than average'),('2','Average'),('2','Larger than average'),('2','I''m not sure'),('3','None'),('3','1-5 plates per week'),('3','6-10 plates per week'),('3','More than 10 plates per week')", function (err, result) {
            if (err) throw err;
        });

      });


    });

  });
   

http.createServer(function (req, res) {
    if(req.url != '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

        var get = url.parse(req.url, true).query;

        if (typeof get.id !== 'undefined') {
            con.query("SELECT question, answer FROM survey_db.answers INNER JOIN survey_db.questions ON survey_db.answers.pk_answer = survey_db.questions.fk_answer WHERE survey_db.questions.pk_question = '"+get.id+"'", function(err, result){
                if (err) {
                    res.end(JSON.stringify(err))
                } else if (!result || result.length === 0) {
                    res.end('No data available');
                } else {
                    var answer = [];
                    var question = result[0].question;
                    result.forEach(element => {
                        answer.push(element.answer);
                    });
                    res.end(JSON.stringify({
                        questions: question,
                        answers: answer
                    }));  
                }

            })  
        } else {
            res.end('No data available');
        }
    }

}).listen(8080);