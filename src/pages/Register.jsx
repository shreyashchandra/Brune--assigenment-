import InputBox from "../components/InputBox";
function Register() {
  return (
    <div className=" mx-auto flex flex-col p-10 mt-40 justify-center items-center gap-3">
      <h1>
        <svg
          width="230"
          height="42"
          viewBox="0 0 230 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.17188 19.8438C2.03125 19.5391 1.91406 19.293 1.82031 19.1055C1.75 18.918 1.71484 18.6953 1.71484 18.4375C1.71484 18.2266 1.73828 18.0391 1.78516 17.875C1.85547 17.6875 1.89063 17.4883 1.89063 17.2773C1.89063 16.7617 1.86719 16.2813 1.82031 15.8359C1.79688 15.3906 1.76172 14.8984 1.71484 14.3594C1.69141 14.2891 1.60938 14.2305 1.46875 14.1836C1.32813 14.1367 1.17578 14.0781 1.01172 14.0078C0.847656 13.9141 0.695313 13.7852 0.554688 13.6211C0.4375 13.457 0.378906 13.2227 0.378906 12.918C0.378906 12.6367 0.4375 12.4023 0.554688 12.2148C0.695313 12.0039 0.835938 11.8164 0.976563 11.6523C1.11719 11.4648 1.24609 11.2773 1.36328 11.0898C1.50391 10.8789 1.57422 10.6328 1.57422 10.3516C1.57422 10.2344 1.5625 10.0234 1.53906 9.71875C1.51563 9.39063 1.49219 9.05078 1.46875 8.69922C1.46875 8.34766 1.45703 8.01953 1.43359 7.71484C1.43359 7.38672 1.43359 7.16406 1.43359 7.04688V6.97656V6.90625C1.52734 6.69531 1.59766 6.51953 1.64453 6.37891C1.71484 6.23828 1.78516 6.13281 1.85547 6.0625C1.92578 5.99219 2.01953 5.94531 2.13672 5.92188C2.25391 5.875 2.40625 5.85156 2.59375 5.85156C3.08594 5.85156 3.44922 5.94531 3.68359 6.13281C3.91797 6.32031 4.08203 6.54297 4.17578 6.80078C4.26953 7.03516 4.32813 7.25781 4.35156 7.46875C4.375 7.67969 4.43359 7.79688 4.52734 7.82031L7.05859 5.60547H7.19922C8.01953 5.06641 8.88672 4.65625 9.80078 4.375C10.7148 4.07031 11.6758 3.91797 12.6836 3.91797C12.9883 3.91797 13.3516 3.95313 13.7734 4.02344C14.2188 4.09375 14.6289 4.22266 15.0039 4.41016C15.4023 4.57422 15.7305 4.79688 15.9883 5.07813C16.2695 5.35938 16.4102 5.71094 16.4102 6.13281C16.4102 6.60156 16.3516 7.08203 16.2344 7.57422C16.1172 8.06641 15.9531 8.55859 15.7422 9.05078C15.5547 9.51953 15.3203 9.97656 15.0391 10.4219C14.7813 10.8438 14.5 11.207 14.1953 11.5117C14.0781 11.7695 13.3281 12.4258 11.9453 13.4805C10.5625 14.5352 8.5 16.1055 5.75781 18.1914L22.6328 19.2461C22.8672 19.2695 23.1836 19.293 23.582 19.3164C24.0039 19.3164 24.4023 19.3516 24.7773 19.4219C25.1758 19.4922 25.5156 19.6328 25.7969 19.8438C26.0781 20.0313 26.2188 20.3242 26.2188 20.7227C26.2188 20.9336 26.1836 21.1094 26.1133 21.25C26.0664 21.3672 25.9961 21.4727 25.9023 21.5664C25.832 21.6367 25.7383 21.707 25.6211 21.7773C25.5273 21.8477 25.4336 21.9414 25.3398 22.0586H24.7422H24.1445C23.6758 22.0117 23.1836 21.9531 22.668 21.8828C22.1758 21.8125 21.5898 21.7305 20.9102 21.6367C20.2539 21.543 19.4805 21.4492 18.5898 21.3555C17.6992 21.2617 16.6328 21.1797 15.3906 21.1094C14.1484 21.0391 12.6953 20.9805 11.0313 20.9336C9.39063 20.8867 7.48047 20.8633 5.30078 20.8633C5.27734 20.8633 5.24219 20.8984 5.19531 20.9688C5.17188 21.0391 5.16016 21.0977 5.16016 21.1445C5.16016 22.0352 5.23047 22.9141 5.37109 23.7813C5.53516 24.625 5.61719 25.4688 5.61719 26.3125C5.61719 26.4766 5.59375 26.6641 5.54688 26.875C5.52344 27.0625 5.46484 27.25 5.37109 27.4375C5.27734 27.6016 5.16016 27.7422 5.01953 27.8594C4.87891 27.9766 4.70313 28.0352 4.49219 28.0352C4.35156 28.0352 4.1875 28.0117 4 27.9648C3.8125 27.8945 3.625 27.8008 3.4375 27.6836C3.27344 27.5664 3.12109 27.4375 2.98047 27.2969C2.83984 27.1563 2.75781 26.9922 2.73438 26.8047L2.17188 19.8438ZM4.52734 12.0742C4.52734 12.6602 4.53906 13.2109 4.5625 13.7266C4.58594 14.2422 4.62109 14.8047 4.66797 15.4141H4.77344C4.79688 15.4141 4.85547 15.3906 4.94922 15.3438C5.04297 15.2969 5.27734 15.1563 5.65234 14.9219C6.02734 14.6641 6.60156 14.2773 7.375 13.7617C8.14844 13.2227 9.23828 12.4727 10.6445 11.5117C10.9258 11.3477 11.2305 11.0664 11.5586 10.668C11.8867 10.2695 12.1914 9.83594 12.4727 9.36719C12.7539 8.89844 12.9883 8.44141 13.1758 7.99609C13.3633 7.52734 13.457 7.14063 13.457 6.83594C13.457 6.60156 13.3398 6.48438 13.1055 6.48438C12.8945 6.48438 12.707 6.48438 12.543 6.48438C12.1914 6.48438 11.793 6.54297 11.3477 6.66016C10.9023 6.77734 10.3633 7.01172 9.73047 7.36328C9.12109 7.71484 8.38281 8.21875 7.51563 8.875C6.67188 9.53125 5.67578 10.4102 4.52734 11.5117V12.0742ZM41.2839 18.0156C41.237 18.4375 41.1784 18.7656 41.1081 19C41.0613 19.2344 40.9675 19.4453 40.8269 19.6328C40.6863 19.8203 40.487 20.0195 40.2292 20.2305C39.9714 20.418 39.6198 20.6992 39.1745 21.0742C38.7292 21.4258 38.1784 21.8945 37.5222 22.4805C36.8659 23.0664 36.0691 23.8281 35.1316 24.7656C34.7566 25.1172 34.3698 25.4805 33.9714 25.8555C33.573 26.2305 33.1511 26.5703 32.7058 26.875C32.2839 27.1563 31.8386 27.3906 31.3698 27.5781C30.9011 27.7656 30.4089 27.8594 29.8933 27.8594C28.8855 27.8594 28.1472 27.5195 27.6784 26.8398C27.2097 26.1602 26.9753 25.375 26.9753 24.4844C26.9753 23.8984 26.987 23.4063 27.0105 23.0078C27.0573 22.6094 27.1511 22.0938 27.2917 21.4609C27.0339 21.2266 26.8113 21.0273 26.6238 20.8633C26.4363 20.6758 26.3425 20.4297 26.3425 20.125C26.3425 19.8438 26.4011 19.6563 26.5183 19.5625C26.6589 19.4688 26.8113 19.4102 26.9753 19.3867C27.1628 19.3398 27.3386 19.293 27.5027 19.2461C27.6667 19.1992 27.7839 19.1055 27.8542 18.9648C27.9011 18.8242 27.9831 18.5664 28.1003 18.1914C28.2409 17.8164 28.3816 17.4297 28.5222 17.0313C28.6628 16.6094 28.7917 16.2227 28.9089 15.8711C29.0495 15.4961 29.1433 15.2383 29.1902 15.0977C29.3542 14.6992 29.53 14.3008 29.7175 13.9023C29.9284 13.4805 30.1628 13.1055 30.4206 12.7773C30.7019 12.4492 31.0183 12.1797 31.3698 11.9688C31.7448 11.7578 32.1784 11.6523 32.6706 11.6523C32.9519 11.6523 33.2917 11.7813 33.6902 12.0391C34.112 12.2969 34.5105 12.6133 34.8855 12.9883C35.2605 13.3398 35.5769 13.7148 35.8347 14.1133C36.0925 14.5117 36.2214 14.8516 36.2214 15.1328C36.2214 15.4844 36.1394 15.8125 35.9753 16.1172C35.8113 16.3984 35.6003 16.668 35.3425 16.9258C35.1081 17.1602 34.8503 17.3828 34.5691 17.5938C34.2878 17.8047 34.03 18.0039 33.7956 18.1914C33.7722 18.1914 33.7253 18.2148 33.655 18.2617C33.5847 18.3086 33.5261 18.3438 33.4792 18.3672C33.4558 18.3906 33.3972 18.4492 33.3034 18.543C33.2331 18.6133 33.1511 18.6953 33.0573 18.7891C32.9636 18.8828 32.8698 18.9766 32.7761 19.0703C32.7058 19.1641 32.6589 19.2227 32.6355 19.2461C32.5652 19.3164 32.4245 19.4336 32.2136 19.5977C32.0261 19.7383 31.8152 19.9023 31.5808 20.0898C31.3464 20.2539 31.1238 20.418 30.9128 20.582C30.7253 20.7227 30.5964 20.8164 30.5261 20.8633L30.3855 21.1445C30.3386 21.2383 30.2917 21.4492 30.2448 21.7773C30.2214 22.082 30.1863 22.4336 30.1394 22.832C30.0925 23.2305 30.0456 23.6406 29.9988 24.0625C29.9753 24.4609 29.9636 24.7891 29.9636 25.0469C29.9636 25.0703 29.9753 25.0938 29.9988 25.1172C30.0456 25.1641 30.0808 25.1875 30.1042 25.1875C30.2917 25.1875 30.4675 25.1055 30.6316 24.9414C30.7956 24.7773 30.9714 24.6602 31.1589 24.5898L36.7839 19.3867L38.2253 17.1719C38.3425 17.0078 38.5652 16.832 38.8933 16.6445C39.2448 16.4336 39.5964 16.3281 39.948 16.3281C40.2995 16.3047 40.6042 16.4102 40.862 16.6445C41.1433 16.8789 41.2839 17.3359 41.2839 18.0156ZM33.5495 15.2734C33.6667 15.1797 33.7136 15.0391 33.6902 14.8516C33.6667 14.6641 33.5964 14.5 33.4792 14.3594C33.3855 14.2188 33.2566 14.1367 33.0925 14.1133C32.9284 14.0664 32.7761 14.1484 32.6355 14.3594C32.5652 14.4531 32.4363 14.6406 32.2488 14.9219C32.0847 15.2031 31.9089 15.4961 31.7214 15.8008C31.5573 16.082 31.4167 16.3281 31.2995 16.5391C31.1823 16.75 31.1589 16.832 31.2292 16.7852L33.5495 15.2734ZM43.2358 40.2695C43.142 40.0117 43.142 39.7188 43.2358 39.3906C43.353 39.0625 43.5756 38.8516 43.9038 38.7578C44.4428 38.9922 45.0053 39.1445 45.5913 39.2148C46.1772 39.2852 46.7631 39.2969 47.3491 39.25C47.9584 39.2031 48.5561 39.1094 49.142 38.9688C49.728 38.8281 50.2905 38.6641 50.8295 38.4766C51.3686 38.0313 51.7436 37.4453 51.9545 36.7188C52.1655 36.0156 52.2475 35.043 52.2006 33.8008C52.1538 32.582 51.9897 31.0469 51.7084 29.1953C51.4506 27.3672 51.1108 25.1172 50.6889 22.4453C50.6889 22.375 50.6889 22.2695 50.6889 22.1289C50.7124 21.9883 50.7124 21.8594 50.6889 21.7422C50.6655 21.6016 50.6186 21.4961 50.5483 21.4258C50.5014 21.3555 50.4311 21.3555 50.3374 21.4258C50.0327 22.0117 49.6694 22.6563 49.2475 23.3594C48.8491 24.0391 48.3803 24.6836 47.8413 25.293C47.3256 25.8789 46.7397 26.3711 46.0834 26.7695C45.4506 27.168 44.7358 27.3672 43.9389 27.3672C43.2358 27.3672 42.6147 27.168 42.0756 26.7695C41.56 26.3477 41.3022 25.75 41.3022 24.9766C41.3022 24.3906 41.4194 23.6523 41.6538 22.7617C41.9116 21.8711 42.2514 20.9336 42.6733 19.9492C43.0952 18.9414 43.5874 17.9453 44.1499 16.9609C44.7124 15.9766 45.2983 15.0859 45.9077 14.2891C46.517 13.4922 47.1381 12.8477 47.7709 12.3555C48.4038 11.8398 49.0131 11.582 49.5991 11.582C49.8334 11.582 50.1381 11.6289 50.5131 11.7227C50.9116 11.793 51.2866 11.9102 51.6381 12.0742C52.0131 12.2383 52.3295 12.4258 52.5874 12.6367C52.8686 12.8477 53.0092 13.0938 53.0092 13.375V16.2227L55.2944 32.8164C55.2944 33.7539 55.2709 34.6445 55.2241 35.4883C55.2006 36.3555 55.0483 37.1523 54.767 37.8789C54.5092 38.6055 54.0874 39.25 53.5014 39.8125C52.9155 40.375 52.0717 40.832 50.9702 41.1836C50.8295 41.2539 50.5366 41.3125 50.0913 41.3594C49.6459 41.4063 49.1303 41.4414 48.5444 41.4648C47.9819 41.4883 47.3725 41.4883 46.7163 41.4648C46.0834 41.4414 45.4975 41.3828 44.9584 41.2891C44.4428 41.2188 44.0209 41.1016 43.6928 40.9375C43.3647 40.7734 43.2124 40.5508 43.2358 40.2695ZM48.7202 14.7109C48.4858 14.9688 48.1694 15.3789 47.7709 15.9414C47.3959 16.5039 47.0092 17.125 46.6108 17.8047C46.2124 18.4844 45.8139 19.1992 45.4155 19.9492C45.0405 20.6758 44.7358 21.3555 44.5014 21.9883C44.267 22.6211 44.1147 23.1602 44.0444 23.6055C43.9975 24.0508 44.103 24.3203 44.3608 24.4141C44.853 24.1563 45.3803 23.7344 45.9428 23.1484C46.5053 22.5391 47.0327 21.8711 47.5249 21.1445C48.0405 20.3945 48.4858 19.6328 48.8608 18.8594C49.2592 18.0625 49.5288 17.3477 49.6694 16.7148C49.8334 16.082 49.8452 15.5781 49.7045 15.2031C49.5874 14.8047 49.2592 14.6406 48.7202 14.7109ZM57.0705 26.6641C56.8361 24.3203 56.6369 22.3164 56.4728 20.6523C56.3088 18.9883 56.1681 17.5938 56.0509 16.4688C55.9338 15.3438 55.8283 14.4531 55.7345 13.7969C55.6642 13.1172 55.6056 12.6133 55.5588 12.2852C55.5119 11.9336 55.4767 11.6992 55.4533 11.582C55.4299 11.4648 55.4181 11.3945 55.4181 11.3711V11.2305C55.4181 10.9727 55.5236 10.7617 55.7345 10.5977C55.9689 10.4102 56.2033 10.3164 56.4377 10.3164C56.7892 10.3164 57.1642 10.375 57.5627 10.4922C57.9845 10.6094 58.2658 10.8555 58.4064 11.2305C58.6174 12.3789 58.758 13.5391 58.8283 14.7109C58.922 15.8828 58.9924 17.0547 59.0392 18.2266C59.1095 19.375 59.1916 20.5352 59.2853 21.707C59.4025 22.8789 59.6017 24.0391 59.883 25.1875C59.883 25.2344 59.8947 25.3281 59.9181 25.4688C59.965 25.6094 60.0002 25.7617 60.0236 25.9258C60.0705 26.0898 60.1056 26.2422 60.1291 26.3828C60.1525 26.5234 60.1642 26.6172 60.1642 26.6641V26.7344C60.1642 26.7578 60.1759 26.7813 60.1994 26.8047C60.1994 27.0859 60.0705 27.3672 59.8127 27.6484C59.5549 27.9297 59.2853 28.0469 59.0041 28C58.9338 27.9766 58.758 27.9414 58.4767 27.8945C58.2189 27.8242 58.0431 27.7656 57.9494 27.7188C57.8791 27.6953 57.7853 27.6484 57.6681 27.5781C57.5509 27.4844 57.4338 27.3906 57.3166 27.2969C57.2228 27.2031 57.1408 27.0977 57.0705 26.9805C57.0002 26.8633 57.0002 26.7578 57.0705 26.6641ZM55.1017 1.03516C55.1017 0.871094 55.2306 0.730469 55.4884 0.613281C55.7697 0.472656 55.9806 0.402344 56.1213 0.402344C56.4728 0.402344 56.8595 0.507813 57.2814 0.71875C57.7267 0.90625 57.9494 1.19922 57.9494 1.59766C57.9494 1.99609 57.8908 2.26563 57.7736 2.40625C57.6799 2.54688 57.4338 2.61719 57.0353 2.61719C56.6134 2.61719 56.1799 2.47656 55.7345 2.19531C55.3127 1.91406 55.1017 1.52734 55.1017 1.03516ZM66.0888 26.6641C66.0888 26.5469 66.0888 26.4414 66.0888 26.3477C66.1122 26.2539 66.1708 26.1602 66.2645 26.0664C66.5458 25.7148 66.8622 25.3516 67.2138 24.9766C67.5653 24.5781 67.9052 24.1914 68.2333 23.8164C68.5614 23.418 68.8661 23.0078 69.1474 22.5859C69.4286 22.1641 69.663 21.7422 69.8505 21.3203V21.1094L65.245 22.0586H64.7177C64.3895 22.0586 63.9794 22.0352 63.4872 21.9883C63.0184 21.9414 62.5497 21.8477 62.0809 21.707C61.6356 21.543 61.2489 21.3203 60.9208 21.0391C60.6161 20.7578 60.4638 20.3828 60.4638 19.9141C60.4872 19.375 60.7684 18.7773 61.3075 18.1211C61.8466 17.4648 62.4794 16.8203 63.2059 16.1875C63.9325 15.5547 64.6591 14.9688 65.3856 14.4297C66.1356 13.8906 66.7333 13.4688 67.1786 13.1641C67.6708 12.8828 68.2567 12.6602 68.9364 12.4961C69.6161 12.3086 70.2372 12.2148 70.7997 12.2148C71.2684 12.2148 71.6786 12.3086 72.0302 12.4961C72.3817 12.6602 72.5575 13 72.5575 13.5156C72.5575 13.7266 72.5341 13.9258 72.4872 14.1133C72.4638 14.3008 72.3231 14.4297 72.0653 14.5C71.3153 14.4297 70.6122 14.4883 69.9559 14.6758C69.2997 14.8398 68.6786 15.0977 68.0927 15.4492C67.5067 15.8008 66.9559 16.2227 66.4403 16.7148C65.9247 17.1836 65.4208 17.6758 64.9286 18.1914C64.788 18.3555 64.6122 18.5898 64.4013 18.8945C64.1903 19.1758 64.0849 19.3398 64.0849 19.3867V19.4219C64.6942 19.4219 65.2919 19.3633 65.8778 19.2461C66.4872 19.1289 67.0849 19.0117 67.6708 18.8945C68.2802 18.7539 68.8778 18.625 69.4638 18.5078C70.0731 18.3906 70.6942 18.332 71.327 18.332C71.5614 18.332 71.8192 18.3555 72.1005 18.4023C72.3817 18.4258 72.6395 18.4961 72.8739 18.6133C73.1317 18.7305 73.3309 18.8945 73.4716 19.1055C73.6356 19.293 73.7177 19.5391 73.7177 19.8438C73.7177 20.2891 73.6005 20.7227 73.3661 21.1445C73.1552 21.543 72.827 22.0352 72.3817 22.6211C71.9599 23.1836 71.4091 23.875 70.7294 24.6953C70.0731 25.5156 69.288 26.5703 68.3739 27.8594C68.327 27.9297 68.2099 27.9766 68.0224 28C67.8583 28.0234 67.7177 28.0352 67.6005 28.0352C67.2724 28.0352 66.9325 27.8945 66.5809 27.6133C66.2528 27.332 66.0888 27.0156 66.0888 26.6641ZM77.9195 17.7344C77.5914 17.7344 77.2984 17.8164 77.0406 17.9805C76.7828 18.1445 76.4781 18.2266 76.1266 18.2266C76.0797 18.2266 75.9508 18.2266 75.7399 18.2266C75.5524 18.2031 75.4352 18.1914 75.3883 18.1914C75.2945 18.0742 75.1891 17.9805 75.0719 17.9102C74.9547 17.8398 74.8375 17.7695 74.7203 17.6992C74.6031 17.6055 74.4977 17.5 74.4039 17.3828C74.3336 17.2656 74.2984 17.1016 74.2984 16.8906C74.2984 16.5391 74.4391 16.2578 74.7203 16.0469C75.0016 15.8125 75.3297 15.6133 75.7047 15.4492C76.0797 15.2852 76.4547 15.1328 76.8297 14.9922C77.2281 14.8516 77.5445 14.6875 77.7789 14.5V12.9531C77.7789 11.2188 77.6969 9.48438 77.5328 7.75C77.3688 5.99219 77.2867 4.25781 77.2867 2.54688C77.2867 2.07813 77.4039 1.77344 77.6383 1.63281C77.8727 1.49219 78.1891 1.42188 78.5875 1.42188C79.0563 1.42188 79.3961 1.5625 79.607 1.84375C79.8414 2.10156 80.0055 2.42969 80.0992 2.82813C80.193 3.20313 80.2399 3.61328 80.2399 4.05859C80.2399 4.48047 80.2516 4.84375 80.275 5.14844C80.275 5.45313 80.2984 5.99219 80.3453 6.76563C80.3922 7.53906 80.4391 8.35938 80.4859 9.22656C80.5328 10.0938 80.5797 10.9141 80.6266 11.6875C80.6734 12.4609 80.7086 13 80.732 13.3047C80.8258 13.2813 81.0016 13.2227 81.2594 13.1289C81.5406 13.0117 81.8336 12.9063 82.1383 12.8125C82.443 12.6953 82.7242 12.5898 82.982 12.4961C83.2633 12.4023 83.4625 12.332 83.5797 12.2852C84.1891 12.0273 84.8219 11.7461 85.4781 11.4414C86.1344 11.1133 86.8024 10.9492 87.482 10.9492C87.9508 10.9492 88.3024 11.1133 88.5367 11.4414C88.7945 11.7461 88.9234 12.1094 88.9234 12.5313C88.9234 12.8359 88.8063 13.0586 88.5719 13.1992C88.3375 13.3398 88.0914 13.4688 87.8336 13.5859L81.4352 15.9766C81.3649 16.0234 81.2945 16.0703 81.2242 16.1172C81.1539 16.1406 81.0836 16.1875 81.0133 16.2578V17.3828C81.0133 18.2031 81.025 19.0586 81.0484 19.9492C81.0953 20.8164 81.1774 21.6602 81.2945 22.4805C81.4117 23.1836 81.5406 23.875 81.6813 24.5547C81.8219 25.2344 81.8922 25.9258 81.8922 26.6289C81.8922 26.8398 81.8219 27.1211 81.6813 27.4727C81.5406 27.8242 81.318 28 81.0133 28C80.3805 28 79.8649 27.8125 79.4664 27.4375C79.068 27.0625 78.8453 26.5586 78.7984 25.9258C78.6813 24.707 78.5524 23.3711 78.4117 21.918C78.2945 20.4648 78.1774 19.0703 78.0602 17.7344H77.9195ZM90.9105 26.4883C90.8636 25.6445 90.7816 24.5195 90.6644 23.1133C90.5706 21.6836 90.4534 20.207 90.3128 18.6836C90.1956 17.1602 90.0667 15.7188 89.9261 14.3594C89.7855 13 89.6683 11.9453 89.5745 11.1953C89.5745 10.8906 89.7152 10.6914 89.9964 10.5977C90.2777 10.5039 90.5472 10.457 90.805 10.457C91.1331 10.457 91.473 10.5508 91.8245 10.7383C92.1995 10.9258 92.4339 11.1836 92.5277 11.5117C92.5277 11.6055 92.5394 11.7813 92.5628 12.0391C92.5863 12.2734 92.598 12.5195 92.598 12.7773C92.6214 13.0352 92.6449 13.293 92.6683 13.5508C92.6917 13.7852 92.7034 13.9492 92.7034 14.043C92.7034 14.1836 92.7034 14.2891 92.7034 14.3594C92.7034 14.4297 92.7034 14.5 92.7034 14.5703C92.7034 14.6172 92.7152 14.6758 92.7386 14.7461C92.762 14.8164 92.7972 14.9336 92.8441 15.0977C92.8909 15.0508 92.9378 14.9922 92.9847 14.9219C93.055 14.8516 93.1019 14.8047 93.1253 14.7813C93.5003 14.2422 93.8636 13.7734 94.2152 13.375C94.5667 12.9531 94.93 12.5664 95.305 12.2148C95.68 11.8398 96.0902 11.4531 96.5355 11.0547C97.0042 10.6328 97.5433 10.1523 98.1527 9.61328C98.2933 9.49609 98.3988 9.41406 98.4691 9.36719C98.5394 9.29688 98.598 9.25 98.6449 9.22656C98.7152 9.17969 98.7855 9.15625 98.8558 9.15625C98.9261 9.13281 99.0199 9.12109 99.137 9.12109C99.5355 9.12109 99.9339 9.26172 100.332 9.54297C100.754 9.80078 100.965 10.1641 100.965 10.6328C100.965 10.7969 100.907 10.9727 100.789 11.1602C100.672 11.3242 100.532 11.4883 100.368 11.6523C100.203 11.793 100.028 11.9219 99.8402 12.0391C99.6761 12.1563 99.5238 12.2383 99.3831 12.2852C98.7738 12.8242 98.1292 13.4453 97.4495 14.1484C96.7699 14.8281 96.137 15.5664 95.5511 16.3633C94.9652 17.1602 94.4847 17.9922 94.1097 18.8594C93.7347 19.7266 93.5472 20.5938 93.5472 21.4609C93.5472 22.2578 93.6058 23.043 93.723 23.8164C93.8402 24.5898 93.8988 25.375 93.8988 26.1719V27.4023C93.7113 27.5898 93.5472 27.7422 93.4066 27.8594C93.2659 27.9766 93.0667 28.0352 92.8089 28.0352C92.4105 28.0352 92.0238 27.8711 91.6488 27.543C91.2738 27.1914 91.0277 26.8398 90.9105 26.4883ZM109.351 18.1914C109.14 18.5664 108.894 19.0234 108.612 19.5625C108.355 20.0781 108.073 20.6406 107.769 21.25C107.464 21.8359 107.124 22.4336 106.749 23.043C106.398 23.6289 106.023 24.168 105.624 24.6602C105.249 25.1523 104.851 25.5742 104.429 25.9258C104.007 26.2539 103.573 26.4531 103.128 26.5234C102.94 26.5234 102.73 26.5117 102.495 26.4883C102.261 26.4414 102.026 26.3828 101.792 26.3125C101.558 26.2188 101.358 26.1016 101.194 25.9609C101.054 25.7969 100.983 25.5859 100.983 25.3281C101.007 22.9375 101.183 20.7695 101.511 18.8242C101.839 16.8555 102.355 15.1328 103.058 13.6563C103.761 12.1563 104.663 10.9141 105.765 9.92969C106.866 8.94531 108.202 8.24219 109.773 7.82031C109.819 7.82031 109.901 7.82031 110.019 7.82031C110.159 7.79688 110.253 7.78516 110.3 7.78516C111.003 7.76172 111.507 8.08984 111.812 8.76953C112.14 9.42578 112.374 10.4805 112.515 11.9336C112.679 13.3633 112.784 15.2148 112.831 17.4883C112.901 19.7383 113.03 22.4453 113.218 25.6094C113.288 25.8672 113.323 26.0898 113.323 26.2773C113.347 26.4648 113.358 26.6875 113.358 26.9453C113.358 27.2969 113.253 27.5664 113.042 27.7539C112.831 27.918 112.562 28 112.233 28C111.554 28 111.073 27.8125 110.792 27.4375C110.511 27.0625 110.323 26.5586 110.23 25.9258C110.23 25.9023 110.206 25.7148 110.159 25.3633C110.136 25.0117 110.089 24.6133 110.019 24.168C109.972 23.6992 109.925 23.2305 109.878 22.7617C109.831 22.293 109.796 21.9063 109.773 21.6016V21.4609C109.726 21.2266 109.69 20.9336 109.667 20.582C109.667 20.2305 109.644 19.8906 109.597 19.5625C109.55 19.1641 109.515 18.7656 109.491 18.3672L109.351 18.1914ZM108.577 11.2305C107.944 11.6992 107.323 12.332 106.714 13.1289C106.105 13.9258 105.671 14.6992 105.413 15.4492C105.296 15.8008 105.167 16.2813 105.026 16.8906C104.886 17.5 104.757 18.1094 104.64 18.7188C104.546 19.3047 104.464 19.8555 104.394 20.3711C104.323 20.8633 104.288 21.1797 104.288 21.3203C104.312 21.3203 104.335 21.2969 104.358 21.25C104.405 21.2031 104.44 21.168 104.464 21.1445C105.917 19.7383 106.937 18.2266 107.523 16.6094C108.132 14.9688 108.483 13.1758 108.577 11.2305ZM117.842 17.7344C117.513 17.7344 117.22 17.8164 116.963 17.9805C116.705 18.1445 116.4 18.2266 116.049 18.2266C116.002 18.2266 115.873 18.2266 115.662 18.2266C115.474 18.2031 115.357 18.1914 115.31 18.1914C115.217 18.0742 115.111 17.9805 114.994 17.9102C114.877 17.8398 114.76 17.7695 114.642 17.6992C114.525 17.6055 114.42 17.5 114.326 17.3828C114.256 17.2656 114.22 17.1016 114.22 16.8906C114.22 16.5391 114.361 16.2578 114.642 16.0469C114.924 15.8125 115.252 15.6133 115.627 15.4492C116.002 15.2852 116.377 15.1328 116.752 14.9922C117.15 14.8516 117.467 14.6875 117.701 14.5V12.9531C117.701 11.2188 117.619 9.48438 117.455 7.75C117.291 5.99219 117.209 4.25781 117.209 2.54688C117.209 2.07813 117.326 1.77344 117.56 1.63281C117.795 1.49219 118.111 1.42188 118.51 1.42188C118.978 1.42188 119.318 1.5625 119.529 1.84375C119.763 2.10156 119.928 2.42969 120.021 2.82813C120.115 3.20313 120.162 3.61328 120.162 4.05859C120.162 4.48047 120.174 4.84375 120.197 5.14844C120.197 5.45313 120.22 5.99219 120.267 6.76563C120.314 7.53906 120.361 8.35938 120.408 9.22656C120.455 10.0938 120.502 10.9141 120.549 11.6875C120.595 12.4609 120.631 13 120.654 13.3047C120.748 13.2813 120.924 13.2227 121.181 13.1289C121.463 13.0117 121.756 12.9063 122.06 12.8125C122.365 12.6953 122.646 12.5898 122.904 12.4961C123.185 12.4023 123.385 12.332 123.502 12.2852C124.111 12.0273 124.744 11.7461 125.4 11.4414C126.056 11.1133 126.724 10.9492 127.404 10.9492C127.873 10.9492 128.224 11.1133 128.459 11.4414C128.717 11.7461 128.845 12.1094 128.845 12.5313C128.845 12.8359 128.728 13.0586 128.494 13.1992C128.26 13.3398 128.013 13.4688 127.756 13.5859L121.357 15.9766C121.287 16.0234 121.217 16.0703 121.146 16.1172C121.076 16.1406 121.006 16.1875 120.935 16.2578V17.3828C120.935 18.2031 120.947 19.0586 120.97 19.9492C121.017 20.8164 121.099 21.6602 121.217 22.4805C121.334 23.1836 121.463 23.875 121.603 24.5547C121.744 25.2344 121.814 25.9258 121.814 26.6289C121.814 26.8398 121.744 27.1211 121.603 27.4727C121.463 27.8242 121.24 28 120.935 28C120.303 28 119.787 27.8125 119.388 27.4375C118.99 27.0625 118.767 26.5586 118.72 25.9258C118.603 24.707 118.474 23.3711 118.334 21.918C118.217 20.4648 118.099 19.0703 117.982 17.7344H117.842ZM130.903 26.6641C130.668 24.3203 130.469 22.3164 130.305 20.6523C130.141 18.9883 130 17.5938 129.883 16.4688C129.766 15.3438 129.661 14.4531 129.567 13.7969C129.497 13.1172 129.438 12.6133 129.391 12.2852C129.344 11.9336 129.309 11.6992 129.286 11.582C129.262 11.4648 129.25 11.3945 129.25 11.3711V11.2305C129.25 10.9727 129.356 10.7617 129.567 10.5977C129.801 10.4102 130.036 10.3164 130.27 10.3164C130.622 10.3164 130.997 10.375 131.395 10.4922C131.817 10.6094 132.098 10.8555 132.239 11.2305C132.45 12.3789 132.59 13.5391 132.661 14.7109C132.754 15.8828 132.825 17.0547 132.872 18.2266C132.942 19.375 133.024 20.5352 133.118 21.707C133.235 22.8789 133.434 24.0391 133.715 25.1875C133.715 25.2344 133.727 25.3281 133.75 25.4688C133.797 25.6094 133.833 25.7617 133.856 25.9258C133.903 26.0898 133.938 26.2422 133.961 26.3828C133.985 26.5234 133.997 26.6172 133.997 26.6641V26.7344C133.997 26.7578 134.008 26.7813 134.032 26.8047C134.032 27.0859 133.903 27.3672 133.645 27.6484C133.387 27.9297 133.118 28.0469 132.836 28C132.766 27.9766 132.59 27.9414 132.309 27.8945C132.051 27.8242 131.875 27.7656 131.782 27.7188C131.711 27.6953 131.618 27.6484 131.5 27.5781C131.383 27.4844 131.266 27.3906 131.149 27.2969C131.055 27.2031 130.973 27.0977 130.903 26.9805C130.833 26.8633 130.833 26.7578 130.903 26.6641ZM128.934 1.03516C128.934 0.871094 129.063 0.730469 129.321 0.613281C129.602 0.472656 129.813 0.402344 129.954 0.402344C130.305 0.402344 130.692 0.507813 131.114 0.71875C131.559 0.90625 131.782 1.19922 131.782 1.59766C131.782 1.99609 131.723 2.26563 131.606 2.40625C131.512 2.54688 131.266 2.61719 130.868 2.61719C130.446 2.61719 130.012 2.47656 129.567 2.19531C129.145 1.91406 128.934 1.52734 128.934 1.03516ZM134.718 22.6211L136.019 13.5859C136.066 13.2813 136.195 13.0586 136.405 12.918C136.64 12.7773 136.898 12.707 137.179 12.707C137.695 12.707 138.105 12.8594 138.409 13.1641C138.714 13.4453 138.972 13.7969 139.183 14.2188H139.218C139.499 14.2188 139.745 14.1719 139.956 14.0781C140.191 13.9609 140.472 13.9023 140.8 13.9023C141.55 13.9023 142.183 14.1367 142.698 14.6055C143.238 15.0742 143.671 15.6484 143.999 16.3281C144.327 16.9844 144.562 17.6992 144.702 18.4727C144.866 19.2461 144.948 19.9258 144.948 20.5117C144.948 21.2148 144.761 22 144.386 22.8672C144.034 23.7344 143.554 24.5547 142.945 25.3281C142.359 26.1016 141.691 26.7461 140.941 27.2617C140.191 27.7773 139.429 28.0352 138.655 28.0352C137.952 28.0352 137.343 27.8711 136.827 27.543C136.335 27.2148 135.925 26.8047 135.597 26.3125C135.292 25.7969 135.07 25.2227 134.929 24.5898C134.788 23.957 134.718 23.3359 134.718 22.7266V22.6211ZM137.671 22.832C137.718 23.0664 137.765 23.3359 137.812 23.6406C137.859 23.9453 137.929 24.2266 138.023 24.4844C138.116 24.7188 138.245 24.9063 138.409 25.0469C138.597 25.1641 138.855 25.1641 139.183 25.0469C139.488 24.7656 139.816 24.4492 140.167 24.0977C140.519 23.7461 140.847 23.3711 141.152 22.9727C141.48 22.5742 141.749 22.1523 141.96 21.707C142.171 21.2617 142.277 20.793 142.277 20.3008C142.37 19.5039 142.312 18.7773 142.101 18.1211C141.89 17.4414 141.585 16.9609 141.187 16.6797C140.812 16.375 140.378 16.3398 139.886 16.5742C139.394 16.7852 138.902 17.3828 138.409 18.3672C138.128 18.9766 137.929 19.6914 137.812 20.5117C137.718 21.3086 137.671 22.0469 137.671 22.7266V22.832ZM155.795 26.8047C155.467 26.3359 155.185 25.6914 154.951 24.8711C154.74 24.0273 154.529 23.1484 154.318 22.2344C154.131 21.2969 153.955 20.3945 153.791 19.5273C153.627 18.6367 153.451 17.9336 153.264 17.418C153.1 16.8789 152.912 16.5742 152.701 16.5039C152.49 16.4336 152.244 16.75 151.963 17.4531L148.904 26.875C148.787 27.2031 148.646 27.4375 148.482 27.5781C148.318 27.6953 148.049 27.7539 147.674 27.7539C147.486 27.7539 147.287 27.7305 147.076 27.6836C146.865 27.6133 146.666 27.5195 146.478 27.4023C146.291 27.2852 146.127 27.1445 145.986 26.9805C145.869 26.8164 145.799 26.6289 145.775 26.418C145.846 26.1367 145.904 25.6211 145.951 24.8711C146.021 24.1211 146.068 23.2539 146.092 22.2695C146.115 21.2852 146.127 20.2539 146.127 19.1758C146.15 18.0742 146.15 17.0547 146.127 16.1172C146.127 15.1563 146.115 14.3359 146.092 13.6563C146.068 12.9531 146.045 12.4961 146.021 12.2852C146.021 12.0508 146.021 11.8164 146.021 11.582C146.045 11.3242 146.08 11.0898 146.127 10.8789C146.197 10.668 146.303 10.5039 146.443 10.3867C146.607 10.2461 146.853 10.1758 147.182 10.1758C147.627 10.1758 148.037 10.3633 148.412 10.7383C148.81 11.1133 149.01 11.5117 149.01 11.9336C149.01 12.543 148.975 13.1523 148.904 13.7617C148.857 14.3477 148.834 14.9453 148.834 15.5547C148.834 15.9297 148.834 16.2461 148.834 16.5039C148.834 16.7617 148.881 17.0781 148.975 17.4531C149.045 17.2656 149.162 16.9375 149.326 16.4688C149.49 16 149.666 15.5078 149.853 14.9922C150.064 14.4766 150.252 13.9961 150.416 13.5508C150.58 13.082 150.697 12.7539 150.768 12.5664C150.932 12.0977 151.178 11.6523 151.506 11.2305C151.834 10.7852 152.268 10.5391 152.807 10.4922C153.158 10.4688 153.475 10.5625 153.756 10.7734C154.06 10.9844 154.318 11.2656 154.529 11.6172C154.74 11.9453 154.916 12.2969 155.057 12.6719C155.197 13.0234 155.303 13.3281 155.373 13.5859L157.271 22.3398L158.748 26.3477C158.771 26.3711 158.783 26.4414 158.783 26.5586C158.783 26.6523 158.783 26.7227 158.783 26.7695C158.783 27.0508 158.713 27.332 158.572 27.6133C158.455 27.8711 158.232 28 157.904 28C157.506 28 157.096 27.8945 156.674 27.6836C156.252 27.4492 155.959 27.1563 155.795 26.8047ZM173.691 19.2461C173.691 19.0352 173.714 18.8594 173.761 18.7188C173.831 18.5781 173.902 18.4492 173.972 18.332C174.066 18.1914 174.136 18.0625 174.183 17.9453C174.253 17.8047 174.288 17.6406 174.288 17.4531C174.288 16.75 174.242 16.0586 174.148 15.3789C174.054 14.6758 173.949 13.9727 173.831 13.2695C173.738 12.5664 173.644 11.875 173.55 11.1953C173.456 10.4922 173.41 9.78906 173.41 9.08594C173.41 8.59375 173.492 8.25391 173.656 8.06641C173.843 7.87891 174.195 7.78516 174.71 7.78516C175.109 7.78516 175.437 7.89063 175.695 8.10156C175.976 8.28906 176.245 8.53516 176.503 8.83984H176.679C176.843 8.74609 177.148 8.57031 177.593 8.3125C178.038 8.05469 178.507 7.78516 178.999 7.50391C179.515 7.22266 179.995 6.96484 180.441 6.73047C180.91 6.47266 181.238 6.28516 181.425 6.16797C181.824 5.95703 182.21 5.78125 182.585 5.64063C182.96 5.5 183.37 5.42969 183.816 5.42969C184.05 5.42969 184.226 5.46484 184.343 5.53516C184.46 5.60547 184.519 5.79297 184.519 6.09766V6.16797C184.425 6.63672 184.261 7.02344 184.027 7.32813C183.792 7.60938 183.511 7.85547 183.183 8.06641C182.878 8.27734 182.55 8.46484 182.199 8.62891C181.87 8.76953 181.554 8.93359 181.249 9.12109C180.546 9.61328 179.949 10.0117 179.456 10.3164C178.988 10.6211 178.578 10.8672 178.226 11.0547C177.898 11.2422 177.628 11.4063 177.417 11.5469C177.23 11.6641 177.078 11.793 176.96 11.9336C176.96 12.0039 176.949 12.1445 176.925 12.3555C176.925 12.543 176.925 12.6602 176.925 12.707C176.925 13.4102 176.937 14.1133 176.96 14.8164C176.984 15.5195 177.124 16.1992 177.382 16.8555L185.574 12.9883C185.738 12.918 185.855 12.8828 185.925 12.8828C186.019 12.8594 186.148 12.8477 186.312 12.8477C186.406 12.8477 186.558 12.8828 186.769 12.9531C186.98 13.0234 187.085 13.1172 187.085 13.2344C187.085 13.7734 186.898 14.2539 186.523 14.6758C186.171 15.0977 185.738 15.4844 185.222 15.8359C184.706 16.1875 184.167 16.4922 183.605 16.75C183.042 17.0078 182.55 17.2422 182.128 17.4531C182.035 17.5 181.929 17.5352 181.812 17.5586C181.695 17.582 181.613 17.6406 181.566 17.7344L177.874 19.668C177.757 19.7383 177.687 19.8086 177.663 19.8789C177.663 19.9258 177.663 20.0078 177.663 20.125C177.663 20.1719 177.663 20.2305 177.663 20.3008C177.687 20.3711 177.699 20.418 177.699 20.4414L178.437 26.207C178.507 26.7695 178.367 27.2148 178.015 27.543C177.687 27.8711 177.277 28.0352 176.785 28.0352C176.691 28.0352 176.574 28.0234 176.433 28C176.292 27.9531 176.152 27.9063 176.011 27.8594C175.87 27.7891 175.742 27.707 175.624 27.6133C175.531 27.4961 175.472 27.3672 175.449 27.2266L174.57 20.3008C174.57 20.207 174.523 20.125 174.429 20.0547C174.335 19.9844 174.23 19.9141 174.113 19.8438C174.019 19.7734 173.925 19.6914 173.831 19.5977C173.738 19.5039 173.691 19.3867 173.691 19.2461ZM187.701 22.6211L189.002 13.5859C189.049 13.2813 189.178 13.0586 189.389 12.918C189.623 12.7773 189.881 12.707 190.162 12.707C190.678 12.707 191.088 12.8594 191.393 13.1641C191.697 13.4453 191.955 13.7969 192.166 14.2188H192.201C192.483 14.2188 192.729 14.1719 192.94 14.0781C193.174 13.9609 193.455 13.9023 193.783 13.9023C194.533 13.9023 195.166 14.1367 195.682 14.6055C196.221 15.0742 196.654 15.6484 196.983 16.3281C197.311 16.9844 197.545 17.6992 197.686 18.4727C197.85 19.2461 197.932 19.9258 197.932 20.5117C197.932 21.2148 197.744 22 197.369 22.8672C197.018 23.7344 196.537 24.5547 195.928 25.3281C195.342 26.1016 194.674 26.7461 193.924 27.2617C193.174 27.7773 192.412 28.0352 191.639 28.0352C190.936 28.0352 190.326 27.8711 189.811 27.543C189.318 27.2148 188.908 26.8047 188.58 26.3125C188.275 25.7969 188.053 25.2227 187.912 24.5898C187.772 23.957 187.701 23.3359 187.701 22.7266V22.6211ZM190.654 22.832C190.701 23.0664 190.748 23.3359 190.795 23.6406C190.842 23.9453 190.912 24.2266 191.006 24.4844C191.1 24.7188 191.229 24.9063 191.393 25.0469C191.58 25.1641 191.838 25.1641 192.166 25.0469C192.471 24.7656 192.799 24.4492 193.15 24.0977C193.502 23.7461 193.83 23.3711 194.135 22.9727C194.463 22.5742 194.733 22.1523 194.943 21.707C195.154 21.2617 195.26 20.793 195.26 20.3008C195.354 19.5039 195.295 18.7773 195.084 18.1211C194.873 17.4414 194.568 16.9609 194.17 16.6797C193.795 16.375 193.361 16.3398 192.869 16.5742C192.377 16.7852 191.885 17.3828 191.393 18.3672C191.111 18.9766 190.912 19.6914 190.795 20.5117C190.701 21.3086 190.654 22.0469 190.654 22.7266V22.832ZM200.341 26.4883C200.294 25.6445 200.212 24.5195 200.095 23.1133C200.001 21.6836 199.884 20.207 199.743 18.6836C199.626 17.1602 199.497 15.7188 199.356 14.3594C199.216 13 199.098 11.9453 199.005 11.1953C199.005 10.8906 199.145 10.6914 199.427 10.5977C199.708 10.5039 199.977 10.457 200.235 10.457C200.563 10.457 200.903 10.5508 201.255 10.7383C201.63 10.9258 201.864 11.1836 201.958 11.5117C201.958 11.6055 201.97 11.7813 201.993 12.0391C202.016 12.2734 202.028 12.5195 202.028 12.7773C202.052 13.0352 202.075 13.293 202.098 13.5508C202.122 13.7852 202.134 13.9492 202.134 14.043C202.134 14.1836 202.134 14.2891 202.134 14.3594C202.134 14.4297 202.134 14.5 202.134 14.5703C202.134 14.6172 202.145 14.6758 202.169 14.7461C202.192 14.8164 202.227 14.9336 202.274 15.0977C202.321 15.0508 202.368 14.9922 202.415 14.9219C202.485 14.8516 202.532 14.8047 202.555 14.7813C202.93 14.2422 203.294 13.7734 203.645 13.375C203.997 12.9531 204.36 12.5664 204.735 12.2148C205.11 11.8398 205.52 11.4531 205.966 11.0547C206.434 10.6328 206.973 10.1523 207.583 9.61328C207.723 9.49609 207.829 9.41406 207.899 9.36719C207.97 9.29688 208.028 9.25 208.075 9.22656C208.145 9.17969 208.216 9.15625 208.286 9.15625C208.356 9.13281 208.45 9.12109 208.567 9.12109C208.966 9.12109 209.364 9.26172 209.763 9.54297C210.184 9.80078 210.395 10.1641 210.395 10.6328C210.395 10.7969 210.337 10.9727 210.22 11.1602C210.102 11.3242 209.962 11.4883 209.798 11.6523C209.634 11.793 209.458 11.9219 209.27 12.0391C209.106 12.1563 208.954 12.2383 208.813 12.2852C208.204 12.8242 207.559 13.4453 206.88 14.1484C206.2 14.8281 205.567 15.5664 204.981 16.3633C204.395 17.1602 203.915 17.9922 203.54 18.8594C203.165 19.7266 202.977 20.5938 202.977 21.4609C202.977 22.2578 203.036 23.043 203.153 23.8164C203.27 24.5898 203.329 25.375 203.329 26.1719V27.4023C203.141 27.5898 202.977 27.7422 202.837 27.8594C202.696 27.9766 202.497 28.0352 202.239 28.0352C201.841 28.0352 201.454 27.8711 201.079 27.543C200.704 27.1914 200.458 26.8398 200.341 26.4883ZM211.117 16.5391C211.07 15.9297 211.011 15.3203 210.941 14.7109C210.894 14.0781 210.812 13.457 210.695 12.8477C210.695 12.332 210.859 12.0039 211.187 11.8633C211.539 11.7227 211.914 11.6523 212.312 11.6523H213.015C213.367 11.8164 213.613 12.0156 213.753 12.25C213.894 12.4844 213.988 12.7422 214.035 13.0234C214.082 13.3047 214.093 13.5977 214.07 13.9023C214.07 14.207 214.082 14.5 214.105 14.7813C214.128 14.8984 214.14 15.0977 214.14 15.3789C214.14 15.6602 214.14 15.9531 214.14 16.2578C214.164 16.5625 214.187 16.8438 214.21 17.1016C214.257 17.3594 214.316 17.5234 214.386 17.5938L217.48 11.793C217.621 11.5352 217.82 11.3242 218.078 11.1602C218.359 10.9727 218.664 10.9023 218.992 10.9492C219.507 10.9961 219.894 11.1016 220.152 11.2656C220.41 11.4063 220.585 11.6055 220.679 11.8633C220.796 12.0977 220.855 12.3906 220.855 12.7422C220.878 13.0938 220.902 13.4805 220.925 13.9023C220.925 14.043 220.937 14.3125 220.96 14.7109C220.984 15.0859 221.007 15.4844 221.031 15.9063C221.078 16.3281 221.113 16.7266 221.136 17.1016C221.183 17.4766 221.218 17.7344 221.242 17.875H221.382C221.429 17.7109 221.511 17.3945 221.628 16.9258C221.769 16.457 221.921 15.9648 222.085 15.4492C222.25 14.9336 222.402 14.4414 222.543 13.9727C222.683 13.5039 222.789 13.1758 222.859 12.9883C222.882 12.9414 222.929 12.8477 223 12.707C223.07 12.543 223.14 12.3789 223.21 12.2148C223.281 12.0273 223.351 11.8633 223.421 11.7227C223.492 11.5586 223.539 11.4414 223.562 11.3711C223.726 11.1133 223.89 10.9844 224.054 10.9844C224.242 10.9609 224.441 10.9492 224.652 10.9492C225.238 10.9492 225.683 11.1016 225.988 11.4063C226.316 11.6875 226.55 12.0508 226.691 12.4961C226.855 12.9414 226.972 13.4336 227.043 13.9727C227.113 14.4883 227.195 14.9688 227.289 15.4141C227.312 15.4141 227.324 15.4375 227.324 15.4844C227.324 15.5078 227.312 15.5313 227.289 15.5547L229.222 25.7852C229.316 25.8789 229.363 25.9609 229.363 26.0313C229.386 26.1016 229.398 26.1953 229.398 26.3125C229.398 26.5703 229.269 26.8281 229.011 27.0859C228.777 27.3203 228.531 27.4375 228.273 27.4375C227.921 27.4375 227.511 27.3086 227.043 27.0508C226.597 26.793 226.339 26.4648 226.269 26.0664L224.652 17.7344L224.476 17.4531C224.429 17.5703 224.324 17.9102 224.16 18.4727C224.019 19.0117 223.843 19.7031 223.632 20.5469C223.421 21.3672 223.175 22.293 222.894 23.3242C222.636 24.3555 222.367 25.4102 222.085 26.4883C222.039 26.6992 221.898 26.8633 221.664 26.9805C221.453 27.0742 221.265 27.1211 221.101 27.1211C220.609 27.1211 220.21 27.0625 219.906 26.9453C219.601 26.8281 219.367 26.6523 219.203 26.418C219.039 26.1836 218.921 25.9023 218.851 25.5742C218.781 25.2461 218.722 24.8711 218.675 24.4492C218.675 24.3555 218.652 24.0273 218.605 23.4648C218.558 22.8789 218.5 22.2227 218.429 21.4961C218.382 20.7461 218.324 19.9961 218.253 19.2461C218.183 18.4961 218.136 17.8984 218.113 17.4531C218.113 17.3594 218.113 17.2891 218.113 17.2422C218.113 17.1953 218.113 17.1602 218.113 17.1367C218.113 17.0898 218.101 17.043 218.078 16.9961C218.054 16.9258 218.007 16.8203 217.937 16.6797L216.918 19.1055L215.3 25.0469L214.949 27.2266C214.925 27.3672 214.855 27.4961 214.738 27.6133C214.644 27.707 214.527 27.7891 214.386 27.8594C214.246 27.9063 214.105 27.9414 213.964 27.9648C213.824 27.9883 213.707 28 213.613 28C213.097 28 212.652 27.8125 212.277 27.4375C211.925 27.0625 211.738 26.6523 211.714 26.207C211.691 26.043 211.668 25.7266 211.644 25.2578C211.621 24.7656 211.585 24.1914 211.539 23.5352C211.492 22.8789 211.445 22.1875 211.398 21.4609C211.375 20.7344 211.339 20.043 211.293 19.3867C211.246 18.7305 211.199 18.1563 211.152 17.6641C211.128 17.1719 211.117 16.8438 211.117 16.6797V16.5391Z"
            fill="#2DA950"
          />
        </svg>
      </h1>
      <h1 className="font-semibold text-xl md:text-4xl">
        Start your success <br></br>
        <span className=" ml-5 md:ml-7">Journey here!</span>
      </h1>
      <div className="mt-4 flex flex-col gap-3 justify-center items-center">
        <InputBox placeholder="Enter your name" type="text" />
        <InputBox placeholder="Enter your email" type="email" />
        <button className="p-2 bg-black text-white w-full rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;
