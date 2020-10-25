import React from 'react';
import { withRouter } from "react-router-dom";

class StartPage extends React.Component {

  redirect = () => {
    this.props.history.push('/step')
  }

  render() {
    return(
    <div className="container h-100 position-absolute bg-grey">
      <div className="row align-items-center mt-5">
        <div className="col-10 mx-auto text-center">
        <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 270 158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
          <path d="M15.216 148.03C14.8897 148.036 14.5741 148.147 14.3155 148.347C13.548 146.319 12.3599 145.015 11.0252 145.015C9.69043 145.015 8.50235 146.319 7.73489 148.347C7.47629 148.147 7.16072 148.036 6.83442 148.03C5.31803 148.03 4.08875 150.594 4.08875 153.757H17.9616C17.9616 150.594 16.7323 148.03 15.216 148.03Z" fill="#48B07A"/>
          <path d="M70.3375 153.437H0V154.077H70.3375V153.437Z" fill="#3F3D56"/>
          <path d="M265.234 134.595C264.907 134.602 264.592 134.713 264.333 134.912C263.566 132.884 262.378 131.581 261.043 131.581C259.708 131.581 258.52 132.884 257.753 134.912C257.494 134.713 257.179 134.602 256.852 134.595C255.336 134.595 254.107 137.159 254.107 140.322H267.979C267.979 137.159 266.75 134.595 265.234 134.595Z" fill="#48B07A"/>
          <path d="M235.384 29.3636H168.407V27.9833H138.037V29.3636H70.7834C70.1885 29.3636 69.5993 29.4807 69.0497 29.7084C68.5 29.936 68.0006 30.2697 67.5799 30.6904C67.1592 31.111 66.8255 31.6104 66.5978 32.16C66.3701 32.7096 66.2529 33.2987 66.2529 33.8935V125.595C66.2529 126.797 66.7302 127.949 67.5799 128.798C68.4295 129.648 69.5819 130.125 70.7834 130.125H235.384C236.585 130.125 237.738 129.648 238.587 128.798C239.437 127.949 239.914 126.797 239.914 125.595V33.8935C239.914 33.2987 239.797 32.7096 239.57 32.16C239.342 31.6104 239.008 31.111 238.587 30.6904C238.167 30.2697 237.667 29.936 237.118 29.7084C236.568 29.4807 235.979 29.3636 235.384 29.3636Z" fill="#3F3D56"/>
          <path opacity="0.2" d="M233.839 37.3679H72.3284V128.47H233.839V37.3679Z" fill="black"/>
          <path d="M152.946 34.8847C153.861 34.8847 154.602 34.1432 154.602 33.2284C154.602 32.3136 153.861 31.572 152.946 31.572C152.031 31.572 151.289 32.3136 151.289 33.2284C151.289 34.1432 152.031 34.8847 152.946 34.8847Z" fill="#48B07A"/>
          <path d="M270 139.683H35.6484V140.322H270V139.683Z" fill="#3F3D56"/>
          <path d="M175.151 71.4052V64.6651C175.151 63.5791 174.937 62.5038 174.521 61.5004C174.105 60.4971 173.496 59.5855 172.728 58.8175C171.96 58.0496 171.048 57.4405 170.045 57.0249C169.042 56.6093 167.966 56.3954 166.88 56.3954H160.139C160.139 55.4856 157.215 54.7402 153.499 54.6695V46.5414C154.665 46.3945 155.731 45.809 156.48 44.904C157.229 43.999 157.605 42.8425 157.532 41.67C157.458 40.4975 156.941 39.3971 156.084 38.5928C155.228 37.7885 154.097 37.3408 152.922 37.3408C151.747 37.3408 150.616 37.7885 149.76 38.5928C148.903 39.3971 148.386 40.4975 148.312 41.67C148.239 42.8425 148.615 43.999 149.364 44.904C150.113 45.809 151.179 46.3945 152.345 46.5414V54.6695C148.629 54.7402 145.705 55.4856 145.705 56.3954H137.809C136.723 56.3954 135.648 56.6093 134.644 57.0249C133.641 57.4405 132.729 58.0496 131.961 58.8175C131.193 59.5855 130.584 60.4971 130.168 61.5004C129.753 62.5038 129.539 63.5791 129.539 64.6651V71.4052C128.582 71.4052 127.807 74.636 127.807 78.6215C127.807 82.6069 128.582 85.8377 129.539 85.8377V93.7324C129.539 94.8184 129.753 95.8938 130.168 96.8971C130.584 97.9004 131.193 98.8121 131.961 99.58C132.729 100.348 133.641 100.957 134.644 101.373C135.648 101.788 136.723 102.002 137.809 102.002H166.88C167.966 102.002 169.042 101.788 170.045 101.373C171.048 100.957 171.96 100.348 172.728 99.58C173.496 98.8121 174.105 97.9004 174.521 96.8971C174.937 95.8938 175.151 94.8184 175.151 93.7324V85.8377C176.107 85.8377 176.883 82.6069 176.883 78.6215C176.883 74.636 176.107 71.4052 175.151 71.4052Z" fill="#48B07A"/>
          <path d="M139.465 58.9934H165.224C167.168 58.9934 169.032 59.7654 170.406 61.1396C171.78 62.5138 172.553 64.3776 172.553 66.321V92.0768C172.553 94.0203 171.78 95.8841 170.406 97.2583C169.032 98.6325 167.168 99.4045 165.224 99.4045H139.465C137.522 99.4045 135.658 98.6325 134.283 97.2583C132.909 95.8841 132.137 94.0203 132.137 92.0768V66.321C132.137 64.3776 132.909 62.5138 134.283 61.1396C135.658 59.7654 137.522 58.9934 139.465 58.9934Z" fill="#3F3D56"/>
          <path d="M143.107 78.1886C141.729 78.187 140.408 77.6391 139.434 76.6651C138.46 75.691 137.912 74.3704 137.911 72.9929C137.911 72.9163 137.941 72.8429 137.995 72.7888C138.049 72.7346 138.123 72.7042 138.199 72.7042C138.276 72.7042 138.349 72.7346 138.403 72.7888C138.457 72.8429 138.488 72.9163 138.488 72.9929C138.488 74.2177 138.975 75.3925 139.841 76.2586C140.707 77.1247 141.882 77.6113 143.107 77.6113C144.332 77.6113 145.507 77.1247 146.373 76.2586C147.239 75.3925 147.726 74.2177 147.726 72.9929C147.726 72.9163 147.756 72.8429 147.81 72.7888C147.864 72.7346 147.938 72.7042 148.014 72.7042C148.091 72.7042 148.164 72.7346 148.219 72.7888C148.273 72.8429 148.303 72.9163 148.303 72.9929C148.302 74.3704 147.754 75.691 146.779 76.6651C145.805 77.6391 144.485 78.187 143.107 78.1886Z" fill="#48B07A"/>
          <path d="M152.345 88.0026C151.273 88.0014 150.246 87.5753 149.488 86.8177C148.73 86.0601 148.304 85.0329 148.303 83.9615C148.303 83.885 148.333 83.8115 148.388 83.7574C148.442 83.7033 148.515 83.6729 148.592 83.6729C148.668 83.6729 148.742 83.7033 148.796 83.7574C148.85 83.8115 148.88 83.885 148.88 83.9615C148.88 84.8802 149.245 85.7612 149.895 86.4108C150.545 87.0604 151.426 87.4253 152.345 87.4253C153.263 87.4253 154.144 87.0604 154.794 86.4108C155.444 85.7612 155.809 84.8802 155.809 83.9615C155.809 83.885 155.839 83.8115 155.893 83.7574C155.947 83.7033 156.021 83.6729 156.097 83.6729C156.174 83.6729 156.247 83.7033 156.302 83.7574C156.356 83.8115 156.386 83.885 156.386 83.9615C156.385 85.0329 155.959 86.0601 155.201 86.8177C154.443 87.5753 153.416 88.0014 152.345 88.0026Z" fill="#48B07A"/>
          <path d="M161.583 78.1886C160.205 78.187 158.884 77.6391 157.91 76.6651C156.936 75.691 156.388 74.3704 156.386 72.9929C156.386 72.9163 156.417 72.8429 156.471 72.7888C156.525 72.7346 156.598 72.7042 156.675 72.7042C156.751 72.7042 156.825 72.7346 156.879 72.7888C156.933 72.8429 156.964 72.9163 156.964 72.9929C156.964 74.2177 157.45 75.3925 158.316 76.2586C159.183 77.1247 160.358 77.6113 161.583 77.6113C162.808 77.6113 163.982 77.1247 164.849 76.2586C165.715 75.3925 166.201 74.2177 166.201 72.9929C166.201 72.9163 166.232 72.8429 166.286 72.7888C166.34 72.7346 166.414 72.7042 166.49 72.7042C166.567 72.7042 166.64 72.7346 166.694 72.7888C166.748 72.8429 166.779 72.9163 166.779 72.9929C166.777 74.3704 166.229 75.691 165.255 76.665C164.281 77.6391 162.96 78.187 161.583 78.1886Z" fill="#48B07A"/>
          <path d="M143.107 75.8794C144.542 75.8794 145.705 74.7163 145.705 73.2816C145.705 71.8468 144.542 70.6837 143.107 70.6837C141.672 70.6837 140.509 71.8468 140.509 73.2816C140.509 74.7163 141.672 75.8794 143.107 75.8794Z" fill="#48B07A"/>
          <path d="M161.583 75.8794C163.018 75.8794 164.181 74.7163 164.181 73.2816C164.181 71.8468 163.018 70.6837 161.583 70.6837C160.148 70.6837 158.985 71.8468 158.985 73.2816C158.985 74.7163 160.148 75.8794 161.583 75.8794Z" fill="#48B07A"/>
          <path d="M152.345 86.5594C153.62 86.5594 154.654 86.0425 154.654 85.4048C154.654 84.7672 153.62 84.2502 152.345 84.2502C151.069 84.2502 150.035 84.7672 150.035 85.4048C150.035 86.0425 151.069 86.5594 152.345 86.5594Z" fill="#48B07A"/>
          <path d="M244.449 126.813H228.687V125.677C228.687 125.648 228.681 125.618 228.67 125.591C228.658 125.564 228.642 125.539 228.621 125.518C228.6 125.497 228.575 125.48 228.548 125.469C228.52 125.458 228.491 125.452 228.462 125.452H223.057C223.028 125.452 222.998 125.458 222.971 125.469C222.944 125.48 222.919 125.497 222.898 125.518C222.877 125.539 222.861 125.564 222.849 125.591C222.838 125.618 222.832 125.648 222.832 125.677V126.813H219.454V125.677C219.454 125.648 219.449 125.618 219.437 125.591C219.426 125.564 219.409 125.539 219.388 125.518C219.368 125.497 219.343 125.48 219.315 125.469C219.288 125.458 219.259 125.452 219.229 125.452H213.825C213.795 125.452 213.766 125.458 213.739 125.469C213.711 125.48 213.687 125.497 213.666 125.518C213.645 125.539 213.628 125.564 213.617 125.591C213.606 125.618 213.6 125.648 213.6 125.677V126.813H210.222V125.677C210.222 125.648 210.216 125.618 210.205 125.591C210.194 125.564 210.177 125.539 210.156 125.518C210.135 125.497 210.11 125.48 210.083 125.469C210.056 125.458 210.026 125.452 209.997 125.452H204.592C204.563 125.452 204.534 125.458 204.506 125.469C204.479 125.48 204.454 125.497 204.433 125.518C204.412 125.539 204.396 125.564 204.384 125.591C204.373 125.618 204.367 125.648 204.367 125.677V126.813H200.99V125.677C200.99 125.648 200.984 125.618 200.972 125.591C200.961 125.564 200.945 125.539 200.924 125.518C200.903 125.497 200.878 125.48 200.851 125.469C200.823 125.458 200.794 125.452 200.764 125.452H195.36C195.33 125.452 195.301 125.458 195.274 125.469C195.247 125.48 195.222 125.497 195.201 125.518C195.18 125.539 195.163 125.564 195.152 125.591C195.141 125.618 195.135 125.648 195.135 125.677V126.813H191.757V125.677C191.757 125.648 191.751 125.618 191.74 125.591C191.729 125.564 191.712 125.539 191.691 125.518C191.67 125.497 191.645 125.48 191.618 125.469C191.591 125.458 191.562 125.452 191.532 125.452H186.128C186.098 125.452 186.069 125.458 186.041 125.469C186.014 125.48 185.989 125.497 185.968 125.518C185.947 125.539 185.931 125.564 185.92 125.591C185.908 125.618 185.902 125.648 185.902 125.677V126.813H182.525V125.677C182.525 125.648 182.519 125.618 182.508 125.591C182.496 125.564 182.48 125.539 182.459 125.518C182.438 125.497 182.413 125.48 182.386 125.469C182.358 125.458 182.329 125.452 182.3 125.452H176.895C176.866 125.452 176.836 125.458 176.809 125.469C176.782 125.48 176.757 125.497 176.736 125.518C176.715 125.539 176.698 125.564 176.687 125.591C176.676 125.618 176.67 125.648 176.67 125.677V126.813H173.292V125.677C173.292 125.648 173.286 125.618 173.275 125.591C173.264 125.564 173.247 125.539 173.226 125.518C173.205 125.497 173.181 125.48 173.153 125.469C173.126 125.458 173.097 125.452 173.067 125.452H130.733C130.704 125.452 130.674 125.458 130.647 125.469C130.62 125.48 130.595 125.497 130.574 125.518C130.553 125.539 130.536 125.564 130.525 125.591C130.514 125.618 130.508 125.648 130.508 125.677V126.813H127.13V125.677C127.13 125.648 127.124 125.618 127.113 125.591C127.102 125.564 127.085 125.539 127.064 125.518C127.043 125.497 127.019 125.48 126.991 125.469C126.964 125.458 126.935 125.452 126.905 125.452H121.501C121.471 125.452 121.442 125.458 121.415 125.469C121.387 125.48 121.362 125.497 121.341 125.518C121.321 125.539 121.304 125.564 121.293 125.591C121.281 125.618 121.275 125.648 121.275 125.677V126.813H117.898V125.677C117.898 125.648 117.892 125.618 117.881 125.591C117.869 125.564 117.853 125.539 117.832 125.518C117.811 125.497 117.786 125.48 117.759 125.469C117.731 125.458 117.702 125.452 117.673 125.452H112.268C112.239 125.452 112.209 125.458 112.182 125.469C112.155 125.48 112.13 125.497 112.109 125.518C112.088 125.539 112.072 125.564 112.06 125.591C112.049 125.618 112.043 125.648 112.043 125.677V126.813H108.665V125.677C108.665 125.648 108.66 125.618 108.648 125.591C108.637 125.564 108.62 125.539 108.599 125.518C108.578 125.497 108.554 125.48 108.526 125.469C108.499 125.458 108.47 125.452 108.44 125.452H103.036C103.006 125.452 102.977 125.458 102.95 125.469C102.922 125.48 102.898 125.497 102.877 125.518C102.856 125.539 102.839 125.564 102.828 125.591C102.816 125.618 102.811 125.648 102.811 125.677V126.813H99.4329V125.677C99.4329 125.648 99.4271 125.618 99.4158 125.591C99.4045 125.564 99.3879 125.539 99.367 125.518C99.3461 125.497 99.3212 125.48 99.2939 125.469C99.2666 125.458 99.2373 125.452 99.2078 125.452H93.8034C93.7738 125.452 93.7445 125.458 93.7172 125.469C93.6899 125.48 93.6651 125.497 93.6442 125.518C93.6233 125.539 93.6067 125.564 93.5954 125.591C93.584 125.618 93.5782 125.648 93.5782 125.677V126.813H90.2005V125.677C90.2005 125.648 90.1947 125.618 90.1834 125.591C90.1721 125.564 90.1555 125.539 90.1346 125.518C90.1136 125.497 90.0888 125.48 90.0615 125.469C90.0342 125.458 90.0049 125.452 89.9753 125.452H84.571C84.5414 125.452 84.5121 125.458 84.4848 125.469C84.4575 125.48 84.4327 125.497 84.4118 125.518C84.3908 125.539 84.3743 125.564 84.3629 125.591C84.3516 125.618 84.3458 125.648 84.3458 125.677V126.813H80.9681V125.677C80.9681 125.648 80.9623 125.618 80.9509 125.591C80.9396 125.564 80.923 125.539 80.9021 125.518C80.8812 125.497 80.8564 125.48 80.8291 125.469C80.8018 125.458 80.7725 125.452 80.7429 125.452H75.3386C75.309 125.452 75.2797 125.458 75.2524 125.469C75.2251 125.48 75.2002 125.497 75.1793 125.518C75.1584 125.539 75.1418 125.564 75.1305 125.591C75.1192 125.618 75.1134 125.648 75.1134 125.677V126.813H64.7551C64.0453 126.813 63.3426 126.952 62.6869 127.224C62.0312 127.496 61.4354 127.894 60.9336 128.395C60.4318 128.897 60.0337 129.493 59.7621 130.148C59.4905 130.804 59.3507 131.507 59.3507 132.216V134.66C59.3507 136.093 59.9201 137.467 60.9336 138.481C61.9471 139.494 63.3217 140.063 64.7551 140.063H244.449C245.883 140.063 247.257 139.494 248.271 138.481C249.284 137.467 249.854 136.093 249.854 134.66V132.216C249.854 131.507 249.714 130.804 249.442 130.148C249.171 129.493 248.773 128.897 248.271 128.395C247.769 127.894 247.173 127.496 246.518 127.224C245.862 126.952 245.159 126.813 244.449 126.813Z" fill="#3F3D56"/>
          <path d="M204.778 101.641H97.0339V102.281H204.778V101.641Z" fill="#48B07A"/>
          <path d="M104.707 101.322H78.1704C79.0196 91.3229 79.0196 81.2703 78.1704 71.2717H104.707C103.246 81.5636 103.16 91.5963 104.707 101.322Z" fill="#D0CDE1"/>
          <path d="M101.19 77.3457H82.0072V78.6244H101.19V77.3457Z" fill="#3F3D56"/>
          <path d="M101.19 81.5015H82.0072V82.7802H101.19V81.5015Z" fill="#3F3D56"/>
          <path d="M101.19 85.6573H82.0072V86.9361H101.19V85.6573Z" fill="#3F3D56"/>
          <path d="M101.19 89.8132H82.0072V91.0919H101.19V89.8132Z" fill="#3F3D56"/>
          <path d="M101.19 93.9689H82.0072V95.2476H101.19V93.9689Z" fill="#3F3D56"/>
          <path d="M34.1919 1.02533C34.1919 1.02533 30.0224 -0.463597 27.342 5.49209C24.6617 11.4478 20.4922 17.999 20.4922 17.999L22.8747 18.5946C22.8747 18.5946 23.4704 14.4256 24.9595 13.83L24.3638 19.1902C24.3638 19.1902 42.233 25.4436 50.2741 18.5946L49.9763 16.5101C49.9763 16.5101 51.1675 16.8079 51.1675 18.5946L52.061 17.7012C52.061 17.7012 51.1675 15.9145 48.4872 13.5323C46.7279 11.9686 46.1233 8.99388 45.9156 7.134C45.7599 5.58098 45.1385 4.11125 44.1328 2.91757C42.3515 0.853454 39.1059 -1.3404 34.1919 1.02533Z" fill="#2F2E41"/>
          <path d="M22.1674 132.391L23.4462 139.743L28.5617 138.784L29.5208 132.391H22.1674Z" fill="#FFB9B9"/>
          <path d="M29.521 136.546L22.4872 137.186L22.8069 142.94L22.4872 150.293C22.4872 150.293 18.3309 158.604 24.4055 157.965C30.4801 157.326 29.8407 154.129 29.8407 154.129L31.4393 152.211L30.4801 147.415L29.521 136.546Z" fill="#2F2E41"/>
          <path d="M50.9418 132.391L49.663 139.743L44.5475 138.784L43.5884 132.391H50.9418Z" fill="#FFB9B9"/>
          <path d="M43.5883 136.546L50.6221 137.186L50.3024 142.94L50.6221 150.293C50.6221 150.293 54.7784 158.604 48.7038 157.965C42.6292 157.326 43.2686 154.129 43.2686 154.129L41.67 152.211L42.6292 147.415L43.5883 136.546Z" fill="#2F2E41"/>
          <path d="M36.2349 20.8227C40.2961 20.8227 43.5884 17.5308 43.5884 13.47C43.5884 9.40931 40.2961 6.11743 36.2349 6.11743C32.1737 6.11743 28.8815 9.40931 28.8815 13.47C28.8815 17.5308 32.1737 20.8227 36.2349 20.8227Z" fill="#FFB9B9"/>
          <path d="M31.4391 17.3062L32.3982 28.8146L41.3503 28.4949C41.3503 28.4949 38.7925 21.1423 40.3911 18.2652L31.4391 17.3062Z" fill="#FFB9B9"/>
          <path d="M36.5548 26.5769L40.2372 24.2804L44.228 26.2572L50.6223 29.1343L48.3843 56.307C48.3843 56.307 53.4997 73.25 52.5406 81.5616C51.5814 89.8733 63.0912 131.432 53.8194 133.35C44.5477 135.268 37.8336 137.186 37.5139 133.989C37.1942 130.792 36.5548 81.8813 36.5548 81.8813C36.5548 81.8813 35.5956 133.669 31.759 134.309C27.9224 134.948 11.2972 137.505 12.5761 133.669C13.8549 129.833 22.4873 62.7006 26.6436 58.8644L27.283 55.6677L21.8478 29.7737L32.0545 24.6874L36.5548 26.5769Z" fill="#2F2E41"/>
          <path d="M17.3717 66.217L17.052 79.3239C17.052 79.3239 13.9744 92.264 19.1899 92.1875C24.4054 92.111 20.5688 79.3239 20.5688 79.3239L22.8068 66.5367L17.3717 66.217Z" fill="#FFB9B9"/>
          <path d="M65.717 52.4609L74.7021 62.0096C74.7021 62.0096 85.63 69.5941 81.6945 73.017C77.7589 76.4398 72.0827 64.3561 72.0827 64.3561L61.8822 56.3254L65.717 52.4609Z" fill="#FFB9B9"/>
          <path d="M26.8033 58.0652L48.7007 57.3939L48.4161 55.9073V55.9009L27.2509 55.5173L26.8033 58.0652Z" fill="#D0CDE1"/>
          <path d="M31.2795 58.7046C32.3389 58.7046 33.1978 57.8458 33.1978 56.7865C33.1978 55.7272 32.3389 54.8684 31.2795 54.8684C30.2201 54.8684 29.3612 55.7272 29.3612 56.7865C29.3612 57.8458 30.2201 58.7046 31.2795 58.7046Z" fill="#2F2E41"/>
          <path d="M24.4054 30.0934L22.3272 29.6139C22.3272 29.6139 19.6096 30.7328 18.9702 34.2492C18.3308 37.7657 10.0181 65.2581 14.1745 66.8565C18.3308 68.4549 24.4054 69.0942 24.4054 68.4549C24.4054 67.8155 26.9631 43.8396 26.9631 43.8396L24.4054 30.0934Z" fill="#2F2E41"/>
          <path d="M43.9609 31.3119L50.6221 29.1343C50.6221 29.1343 53.8193 29.1343 53.8193 32.6507C53.8193 34.1014 59.9467 46.0171 59.9467 46.0171C59.9467 46.0171 74.6695 56.5106 72.4157 56.8862C68.5791 57.5255 66.3411 64.2388 66.3411 64.2388L51.9538 51.4516L43.9609 31.3119Z" fill="#2F2E41"/>
          <path d="M27.2666 14.0177C27.2666 14.0177 29.6491 10.7421 31.7339 10.1465C33.8186 9.55092 34.1164 6.57308 34.1164 6.57308C34.1164 6.57308 39.4771 12.5288 42.7531 12.8265C46.0291 13.1243 43.051 5.67972 43.051 5.67972L37.0946 4.1908L31.436 4.78636L26.9688 7.7642L27.2666 14.0177Z" fill="#2F2E41"/>
          <path d="M29.0414 13.7898C29.5711 13.7898 30.0006 13.1458 30.0006 12.3513C30.0006 11.5568 29.5711 10.9127 29.0414 10.9127C28.5117 10.9127 28.0823 11.5568 28.0823 12.3513C28.0823 13.1458 28.5117 13.7898 29.0414 13.7898Z" fill="#FFB9B9"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="270" height="158" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        </div>
      </div>
      <div className="row align-items-center mt-6">
        <div className="col-10 mx-auto text-center">
          <h5><b>Calculate your personal Score</b><br/></h5>
          <div className="w-100 mt-3"></div>
          <small><div className="fw-5">Next we have a short 2–3 minute survey covering Diet, Home, Travel, and Other that will let us calculate your personal carbon footprint.</div></small>
        </div>
      </div>
      <div className="row align-items-center fixed-bottom h-25">
        <div className="col-10 mx-auto mb-4 text-center">
          <button onClick={this.redirect} type="button" className="btn btn-block" style={{'background-color': '#48B07A', 'border-color': '#48B07A', 'border-radius': '0'}}><small className="white">Take the survey</small></button>
        </div>
      </div>
    </div>
    );}
}

export default withRouter(StartPage);
