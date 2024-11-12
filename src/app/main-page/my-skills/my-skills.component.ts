import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { SkillIconComponent } from './skill-icon/skill-icon.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ButtonComponent, SkillIconComponent, NgFor],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  public lastIcon: string = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_126573_1248)">
<path d="M49.8288 25.245L30.6154 36.1892C30.2695 36.3926 29.8423 36.3926 29.4863 36.1892L10.2729 25.245C9.52025 24.8178 9.52025 23.7294 10.2729 23.2921L29.4863 12.3479C29.8322 12.1444 30.2594 12.1444 30.6154 12.3479L49.8288 23.2921C50.5814 23.7193 50.5814 24.8076 49.8288 25.245Z" fill="#9747FF"/>
<path d="M46.5028 28.9269V37.9488C46.5028 38.3557 46.2892 38.7218 45.9332 38.9252L30.6154 47.6521C30.2695 47.8556 29.8423 47.8556 29.4863 47.6521L14.1685 38.9252C13.8125 38.7218 13.5989 38.3557 13.5989 37.9488V28.9269L22.0919 33.7583L29.4863 37.9793C29.8322 38.1827 30.2594 38.1827 30.6154 37.9793L38.0098 33.7583L46.5028 28.9269Z" fill="#9747FF"/>
<path d="M55.4535 14.0363L55.9824 13.6701C56.6232 13.2226 56.5418 12.2563 55.84 11.9207L51.6291 9.91693C50.9171 9.58128 50.1136 10.1407 50.1746 10.9239L50.5815 15.5721C50.6526 16.3451 51.5375 16.7622 52.1783 16.3146L52.931 15.7959C59.6237 26.5774 57.8234 40.9391 48.4658 49.6864C39.2609 58.2912 25.072 59.3389 14.7279 52.1783C14.0363 51.7003 13.0802 51.8732 12.6021 52.5648C12.1241 53.2565 12.297 54.2126 12.9886 54.6906C18.1048 58.2302 24.0549 59.9695 29.9949 59.9695C37.4301 59.9695 44.8449 57.2436 50.5509 51.9139C60.9968 42.1393 63.0107 26.0587 55.4535 14.0363Z" fill="#9747FF"/>
<path d="M47.1131 5.30936C35.5992 -2.66487 19.8033 -1.49518 9.55076 8.0861C-1.15953 18.1047 -3.08189 34.1142 4.90252 46.34L4.16002 46.8486C3.51923 47.2961 3.6006 48.2624 4.30242 48.5981L8.5133 50.6018C9.22528 50.9374 10.0288 50.378 9.96778 49.5948L9.56094 44.9466C9.48974 44.1736 8.60484 43.7566 7.96405 44.2041L7.41481 44.5906C0.3153 33.6159 2.03424 19.2846 11.6359 10.3136C20.8408 1.70875 35.0297 0.650944 45.3738 7.82165C46.0654 8.2997 47.0215 8.12679 47.4996 7.43515C47.9776 6.7435 47.8047 5.78741 47.1131 5.30936Z" fill="#9747FF"/>
</g>
<defs>
<clipPath id="clip0_126573_1248">
<rect width="60" height="59.939" fill="white" transform="translate(0 0.0305138)"/>
</clipPath>
</defs>
</svg>
`;
  public lastIconName: string = 'Continually learning';

  public allIcons: { icon: string; iconName: string }[] = [
    {
      icon: `<svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 48.534L40.86 44.766L42.729 24.432H18.078L17.466 17.67H43.344L44.025 11.037H9.975L11.883 31.071H35.343L34.56 39.669L27 41.67L19.44 39.669L18.966 34.137H12.156L13.143 44.769L27 48.534ZM0 0H54L49.131 54L27 60L4.869 54L0 0Z" fill="white"/>
</svg>
`,
      iconName: 'HTML',
    },
    {
      icon: `<svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.511569 0.0105726C0.511569 0.243169 0.500988 0.401758 0.511569 0.560346C0.913666 4.95854 1.31576 9.35673 1.70728 13.7655C2.25752 20.0033 2.79717 26.2411 3.34741 32.4684C3.97172 39.4674 4.60661 46.4559 5.20976 53.4549C5.25208 53.9624 5.43197 54.1844 5.90814 54.3113C12.6803 56.1721 19.4313 58.0434 26.2035 59.8936C26.6585 60.0205 27.2087 60.0416 27.6637 59.9148C34.457 58.054 41.2398 56.1615 48.0331 54.2902C48.5516 54.1421 48.7315 53.9095 48.7738 53.3809C48.9854 50.7378 49.2394 48.0841 49.4722 45.4409C49.8637 41.0639 50.2446 36.6868 50.6362 32.3098C51.0912 27.1715 51.5567 22.0438 52.0117 16.9055C52.3504 13.0783 52.7101 9.26157 53.0487 5.4343C53.2075 3.63696 53.345 1.83963 53.4932 0H0.511569V0.0105726ZM43.2714 15.2774C42.9222 19.1469 42.573 23.0271 42.2239 26.8966C41.8218 31.3477 41.4197 35.7987 41.0176 40.2392C40.9012 41.5185 40.7319 42.7978 40.7001 44.0876C40.679 44.7748 40.3827 44.9546 39.8113 45.1132C35.7268 46.2127 31.6529 47.344 27.5791 48.4647C27.3992 48.5175 27.2299 48.581 27.05 48.6338C26.9865 48.6021 26.923 48.581 26.8489 48.5492C22.4894 47.3651 18.1298 46.1704 13.7702 44.9651C13.5903 44.9123 13.3575 44.6268 13.3364 44.4259C13.0295 41.1273 12.7544 37.8287 12.4581 34.4666H19.1139C19.2303 35.7882 19.3572 37.1309 19.463 38.4842C19.5583 39.7317 19.5477 39.7317 20.7222 40.0489C22.828 40.6092 24.9443 41.159 27.05 41.7088L27.0288 41.6559C29.3356 41.0427 31.6424 40.4401 33.9491 39.7846C34.1608 39.7212 34.4041 39.3828 34.4359 39.1502C34.5734 38.1353 34.6475 37.1097 34.7322 36.0948C34.8697 34.456 35.0073 32.8173 35.1554 31.1045H27.0288L27.05 31.0622C26.9971 31.0622 26.9336 31.0622 26.8807 31.0622H12.1512C11.9502 28.8737 11.7597 26.7063 11.5587 24.4755H26.8913C26.9442 24.4755 27.0077 24.4755 27.0606 24.4755L27.0394 24.4332H35.748C35.949 22.1601 36.1501 19.9399 36.3511 17.6773H27.0288L27.05 17.635C26.9971 17.635 26.9336 17.635 26.8807 17.635C21.664 17.6456 16.4473 17.6456 11.2306 17.6562C11.1566 17.6562 11.0825 17.6245 10.9449 17.5822C10.7545 15.4254 10.5534 13.2686 10.3629 11.0483H26.8807C26.9336 11.0483 26.9971 11.0483 27.05 11.0483L27.0288 11.006H43.6206C43.5042 12.4862 43.3878 13.8818 43.2714 15.2774Z" fill="white"/>
</svg>
`,
      iconName: 'CSS',
    },
    {
      icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0C20.0135 0 39.9865 0 60 0C60 20.0135 60 40.027 60 60C40.027 60 20.0135 60 0 60C0 39.946 0 19.973 0 0ZM53.6799 31.7623C52.4645 29.5746 50.8035 28.0756 48.4132 27.549C46.7117 27.1438 45.0101 27.1438 43.3086 27.5084C37.7988 28.6428 35.449 35.287 39.0142 39.7029C40.2701 41.2424 41.9311 42.1742 43.6732 42.9845C45.2127 43.7137 46.7927 44.4024 48.3322 45.1722C49.3855 45.6988 49.8312 46.6712 49.7097 47.846C49.5881 49.0209 48.7778 49.6691 47.765 50.0338C45.4963 50.844 42.8629 50.1148 41.3234 48.2107C40.9993 47.8055 40.6752 47.3599 40.3511 46.9142C38.8116 47.8055 37.3126 48.6563 35.8136 49.5476C36.7454 51.3707 38.0419 52.8292 39.8244 53.8015C42.8629 55.4625 46.0635 55.7056 49.345 54.8953C51.4922 54.3687 53.3153 53.2748 54.4497 51.2897C56.5564 47.5219 55.341 42.8224 51.6138 40.5132C49.9527 39.5003 48.0891 38.8116 46.3471 37.9203C45.4963 37.4747 44.605 37.0695 43.8758 36.5024C42.5793 35.449 42.8224 33.3423 44.2809 32.5321C45.6988 31.7218 47.684 32.208 48.7778 33.6259C49.0209 33.9095 49.183 34.2336 49.4261 34.5577C50.8035 33.6259 52.2215 32.6941 53.6799 31.7623ZM15.8001 50.1553C16.6104 51.8974 17.7853 53.2748 19.4463 54.1661C21.5935 55.341 23.9433 55.5435 26.3336 55.1789C28.4808 54.8548 30.2633 53.8825 31.4382 51.9379C32.4105 50.3173 32.6941 48.5348 32.6941 46.6306C32.6941 40.4726 32.6941 34.3147 32.6941 28.1566C32.6941 27.9946 32.6941 27.792 32.6941 27.5895C30.79 27.5895 28.9669 27.5895 27.0628 27.5895C27.0628 27.8325 27.0628 28.0351 27.0628 28.2782C27.0628 34.3552 27.0628 40.3916 27.0628 46.4686C27.0628 47.0358 27.0223 47.6435 26.9413 48.2107C26.7792 49.1425 26.293 49.8312 25.3612 50.1148C23.6192 50.6415 22.2012 50.1148 21.1884 48.6158C20.9453 48.2107 20.7022 47.8055 20.4186 47.4004C18.8386 48.3322 17.3396 49.2235 15.8001 50.1553Z" fill="white"/>
</svg>
`,
      iconName: 'JavaScript',
    },
    {
      icon: `<svg width="60" height="62" viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59.9454 5.75193C59.5084 3.45789 57.7333 1.60082 55.4665 1.10924C55.3573 1.08193 55.2481 1.08193 55.1115 1.05462C55.0842 1.05462 55.0569 0.999997 55.0296 0.972687H4.9431C4.91579 0.999997 4.88848 1.05462 4.83386 1.05462C2.56714 1.43696 0.655439 3.23941 0.13655 5.53345C0.10924 5.61538 0.0546199 5.72462 0 5.83386V56.0569C0.02731 56.1115 0.0819299 56.1388 0.0819299 56.1934C0.628129 58.706 2.15749 60.2626 4.64269 60.8908C4.72462 60.9181 4.77924 60.9727 4.83386 61.0273H55.1115C55.1661 61 55.1934 60.9454 55.2481 60.9181C57.7333 60.3446 59.2626 58.8425 59.8908 56.3573C59.9181 56.2754 59.8908 56.1661 59.9181 56.0842C59.9181 56.0569 59.9727 56.0296 60 56.0023V5.91579C60 5.86117 59.9454 5.83386 59.9454 5.75193ZM34.8202 34.2635H34.5198C32.2531 34.2635 29.959 34.2635 27.6923 34.2635C27.5831 34.2635 27.4738 34.2635 27.3646 34.2635C27.3646 34.2908 27.3373 34.2908 27.3373 34.3182C27.3373 34.4274 27.3373 34.5366 27.3373 34.6459V55.7019H21.3564V34.2908H13.8462V29.5116H34.7929V34.2635H34.8202ZM54.975 48.5467C54.9203 49.4752 54.7838 50.3764 54.4015 51.2503C54.2922 51.5234 54.2103 51.7692 54.0737 52.0423C53.5822 53.0801 52.7629 53.8175 51.807 54.4183C50.7146 55.101 49.513 55.4834 48.2567 55.7292C46.8639 56.0023 45.4711 56.0842 44.051 56.0296C43.3682 56.0023 42.6855 56.0023 42.0027 55.9203C40.3914 55.7292 38.8075 55.3741 37.3327 54.6641C37.2508 54.6368 37.1416 54.5002 37.1416 54.4183C37.1416 52.6431 37.1416 50.868 37.1416 49.0928C37.1416 49.0655 37.1416 49.0382 37.1416 48.9836C37.5785 49.284 38.0155 49.5844 38.4524 49.8302C39.5175 50.4583 40.6919 50.8953 41.8935 51.1684C42.9313 51.4142 43.9691 51.4415 45.0068 51.3869C45.7988 51.3596 46.5908 51.1684 47.3009 50.8134C47.929 50.4857 48.4479 50.0487 48.5844 49.3113C48.721 48.6559 48.6664 48.0005 48.284 47.4269C47.7378 46.6076 46.9731 46.0888 46.1265 45.6518C45.1707 45.1875 44.2148 44.7779 43.2317 44.3409C41.7843 43.6855 40.3641 42.9754 39.1898 41.883C38.234 40.9818 37.5239 39.9167 37.1962 38.6331C37.005 37.8685 36.9504 37.1038 36.9777 36.3391C37.005 34.4547 37.6878 32.8434 39.0259 31.5052C40.1183 30.4128 41.4565 29.7574 42.9313 29.3751C43.9417 29.1293 44.9522 28.9381 45.99 28.9108C46.7274 28.9108 47.4647 28.8289 48.1748 28.8562C49.2945 28.8835 50.3869 28.9381 51.4793 29.2112C52.1894 29.4024 52.9267 29.5935 53.6368 29.7574C53.7733 29.7847 53.8279 29.8666 53.8279 30.0305C53.8279 31.7237 53.8279 33.4442 53.8279 35.1375C53.8279 35.1921 53.8279 35.2467 53.8006 35.3286C53.5822 35.1921 53.391 35.0828 53.1998 34.9736C52.3259 34.482 51.3974 34.1543 50.4415 33.9085C49.3764 33.6627 48.3113 33.4989 47.2189 33.5262C46.4816 33.5535 45.7169 33.6627 45.0341 33.9085C44.1875 34.2089 43.5048 34.7005 43.2044 35.6017C42.9586 36.3118 43.1498 36.9126 43.5867 37.4861C44.1329 38.1962 44.8703 38.6878 45.6623 39.0701C46.7274 39.589 47.8198 40.0259 48.8575 40.5175C50.0592 41.091 51.2608 41.6645 52.2713 42.5112C53.1452 43.2485 53.9372 44.0678 54.3741 45.1602C54.6199 45.8157 54.8384 46.4984 54.8384 47.2358C54.9477 47.6727 55.0023 48.1097 54.975 48.5467Z" fill="white"/>
</svg>
`,
      iconName: 'TypeScript',
    },
    {
      icon: `<svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 0L55.9 9.96L51.646 46.89L28 60L4.35398 46.89L0.0999756 9.96L28 0ZM28 6.63L10.558 45.78H17.062L20.569 37.02H35.371L38.881 45.78H45.382L28 6.63ZM33.094 31.62H22.906L28 19.35L33.094 31.62Z" fill="white"/>
</svg>
`,
      iconName: 'Angular',
    },
    {
      icon: `<svg width="44" height="60" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.64916 39.1719L7.58056 1.16324C7.78509 -0.132123 9.5236 -0.43892 10.1372 0.720089L16.5117 12.6511L1.64916 39.1719ZM43.8166 48.4099L38.1579 13.401C37.9875 12.3102 36.624 11.867 35.8399 12.6511L0.18335 48.4099L19.9206 59.4887C21.1478 60.1704 22.6818 60.1704 23.909 59.4887L43.8166 48.4099ZM27.795 17.8666L23.2272 9.17404C22.7159 8.18547 21.3182 8.18547 20.8069 9.17404L0.728766 44.967L27.795 17.8666Z" fill="white"/>
</svg>
`,
      iconName: 'Firebase',
    },
    {
      icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58.8823 27.3573L32.6471 1.12561C31.1461 -0.375204 28.6662 -0.375204 27.1651 1.12561L21.7484 6.5416L28.6662 13.4584C30.2977 12.9364 32.125 13.2626 33.365 14.5677C34.6702 15.8728 34.9965 17.6998 34.4744 19.3312L41.1311 25.987C42.7627 25.4649 44.59 25.7912 45.8952 27.0963C47.7225 28.8581 47.7225 31.7945 45.8952 33.6215C44.0679 35.4486 41.1964 35.4486 39.3691 33.6215C37.9986 32.2512 37.6722 30.2936 38.3901 28.5971L32.1903 22.398V38.7113C32.6471 38.907 33.0387 39.2333 33.4302 39.5595C35.2576 41.3214 35.2576 44.2578 33.4302 46.0848C31.6029 47.8467 28.7314 47.8467 26.9041 46.0848C25.0768 44.2578 25.0768 41.3866 26.9041 39.5595C27.3609 39.1028 27.883 38.7765 28.4051 38.5808V22.0718C27.883 21.876 27.3609 21.4845 26.9041 21.093C25.5336 19.7227 25.2073 17.7651 25.9252 16.0685L19.0727 9.28222L1.12576 27.2268C-0.375254 28.7276 -0.375254 31.2072 1.12576 32.708L27.2957 58.8744C28.7967 60.3752 31.2766 60.3752 32.7776 58.8744L58.817 32.8385C60.3833 31.2724 60.3833 28.8581 58.8823 27.3573Z" fill="white"/>
</svg>
`,
      iconName: 'GIT',
    },
    {
      icon: `<svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7256 54.8917C17.6823 53.7545 14.1264 51.6607 11.0217 48.7365C10.0469 49.0794 9.05415 49.4224 8.04332 49.7473C7.57401 49.8917 7.10469 49.8375 6.61733 49.657C5.7509 49.3321 5.22744 48.7004 4.84838 47.9242C4.32491 46.8953 3.65704 45.9567 3.13357 44.9278C2.66426 43.9711 1.97834 43.1408 1.58123 42.148C1.38267 41.6607 0.859206 41.3357 0.859206 40.722C0.389892 39.9639 0.841155 39.296 1.11191 38.6282C1.18412 38.4477 1.27437 38.213 1.43682 38.1408C2.08664 37.852 2.41155 37.2022 2.95307 36.8051C3.20578 36.6245 3.47653 36.426 3.76534 36.2094C3.35018 34.1336 2.98917 32.0578 2.98917 29.9278C2.98917 27.8159 3.36823 25.7762 3.76534 23.7545C3.06137 23.1047 2.41155 22.4729 1.72563 21.8773C1.02166 21.2635 0.606498 20.5054 0.696751 19.7112C0.750903 19.278 0.877256 18.8087 1.09386 18.4477C1.76173 17.3827 2.37545 16.2635 3.02527 15.1805C3.54874 14.3141 4 13.4116 4.57762 12.5632C4.88448 12.13 5.06498 11.6245 5.37184 11.1733C5.96751 10.3249 7.15884 9.90975 8.13357 10.1986C9 10.4513 9.81227 10.8303 10.6968 10.9928C10.787 11.0108 10.8592 11.1372 10.9495 11.2274C14.0722 8.3213 17.6282 6.24549 21.7076 5.0361C21.87 4.54874 21.9061 4.02527 22.1047 3.51986C22.2491 3.14079 22.213 2.67148 22.2852 2.25632C22.4838 1.17329 23.1516 0.541516 24.1083 0.216606C24.4513 0.108303 24.7942 0 25.2094 0C27.7365 0.0361011 30.2635 0.0361011 32.7906 0C33.5126 0 34.1264 0.288809 34.704 0.613718C35.2274 0.884477 35.5162 1.46209 35.6607 2.00361C35.9134 2.99639 36.0578 4.00722 36.2563 5.05415C40.3177 6.20939 43.8736 8.2852 46.9783 11.2094C47.9531 10.8664 48.9459 10.5235 49.9567 10.1986C50.426 10.0542 50.8953 10.1083 51.3827 10.2888C52.2491 10.6137 52.7726 11.2455 53.1516 12.0217C53.6751 13.0505 54.343 13.9892 54.8664 15.0181C55.3357 15.9747 56.0217 16.8051 56.4188 17.7978C56.6173 18.2852 57.1408 18.6101 57.1408 19.2238C57.6101 19.982 57.1588 20.6498 56.8881 21.3177C56.8159 21.4982 56.7256 21.7329 56.5632 21.8051C55.9134 22.0939 55.5885 22.7437 55.0469 23.1408C54.7942 23.3213 54.5235 23.5199 54.2347 23.7365C54.6498 25.8123 55.0108 27.8881 55.0108 30.018C55.0108 32.13 54.6859 34.1697 54.2347 36.1913C54.9386 36.8412 55.5885 37.4729 56.2744 38.0686C56.9783 38.6823 57.3935 39.4404 57.3033 40.2347C57.2491 40.6679 57.1408 41.1372 56.9061 41.4982C56.2563 42.5451 55.6426 43.6282 55.0108 44.6931C54.2166 46.0108 53.5668 47.4368 52.6462 48.6823C52.4838 49.3682 51.8339 49.4224 51.3646 49.6751C50.8592 49.9458 50.3538 49.8736 49.7942 49.7112C48.9639 49.4765 48.1697 49.0614 47.3033 48.9531C47.213 48.935 47.1408 48.8087 47.0505 48.7184C43.9278 51.6607 40.3899 53.7545 36.2563 54.9278C36.0578 55.9025 35.8773 56.9134 35.6607 57.9061C35.444 58.8809 34.7942 59.4946 33.8736 59.7834C33.5307 59.8917 33.1697 60 32.7726 60C30.2455 59.9639 27.7184 59.9639 25.1913 60C24.4693 60 23.8556 59.7112 23.278 59.3863C22.7545 59.1155 22.4477 58.5379 22.3394 57.9964C22.1408 56.9314 21.9422 55.9386 21.7256 54.8917ZM22.8989 38.9892C23.2599 38.7906 23.6751 38.6643 23.6931 38.231C23.7292 37.5812 23.8195 36.9134 23.6751 36.2996C23.4224 35.2527 22.9711 34.2419 22.7004 33.1949C22.5199 32.5271 22.1227 31.8953 22.1408 31.1733C21.5632 29.7473 21.2022 28.2491 20.7148 26.8051C20.3177 25.6137 20.0289 24.3863 19.5957 23.213C19.361 22.5632 19.3069 21.8412 18.8736 21.2635C18.8375 21.2094 18.8195 21.1733 18.8195 21.1733C18.3321 20.8484 17.8267 20.9567 17.3935 20.9567C17.1408 21.1913 16.9242 21.3899 16.7256 21.5704C16.7076 22.148 16.2924 22.5993 16.3646 23.1588C15.7329 24.5668 15.4621 26.083 14.9386 27.5271C14.6679 28.2671 14.5054 29.0253 14.2888 29.7834C14.0903 30.5415 13.657 31.2274 13.657 32.0397C12.9711 33.574 12.6282 35.2166 12.1227 36.8231C11.9964 37.2202 11.9242 37.5993 12.1769 37.9783C12.2491 38.0866 12.213 38.2491 12.213 38.231C12.5018 38.5379 12.7184 38.7545 12.8989 38.9711C13.2419 38.9711 13.6029 38.9711 13.982 38.9711C14.2347 38.6462 14.4874 38.3394 14.722 38.0325C14.6679 37.0036 14.8845 36.3177 15.3538 35.2166C17.1227 35.2166 18.8917 35.2166 20.6607 35.2166C20.8051 35.7942 20.8773 36.3538 21.0758 36.8773C21.1661 37.0939 21.2563 37.3105 21.2202 37.5271C21.1661 38.1949 21.3827 38.7184 22.1408 38.9711C22.3213 38.9892 22.5921 38.9892 22.8989 38.9892ZM27.1227 38.9892C27.6101 38.9531 28.1697 39.0975 28.5668 38.7004C28.7112 38.5199 28.8375 38.3394 29.0181 38.0866C29.0181 36.2816 29.0181 34.3863 29.0181 32.491C30.3357 32.491 31.6354 32.4368 32.917 32.509C33.6931 32.5451 34.3249 32.3105 34.9386 31.9314C35.2274 31.7509 35.4801 31.4801 35.7329 31.2274C36.4007 30.5776 36.7256 29.7834 36.7437 28.8448C36.7437 27.3646 36.7437 25.9025 36.7437 24.4224C36.7437 24.2058 36.6895 23.9711 36.6354 23.7545C36.4368 22.9783 36.0217 22.4007 35.4621 21.8953C34.8123 21.2996 34.0542 20.9386 33.1516 20.9386C31.13 20.9386 29.1264 20.9386 27.0866 20.9386C26.8881 21.1552 26.6895 21.3718 26.4549 21.5884C26.4549 27.148 26.4549 32.7437 26.4549 38.3574C26.6895 38.556 26.9061 38.7726 27.1227 38.9892ZM40.1191 38.9892C41.3646 38.9892 42.6282 38.9892 43.8736 38.9892C44.0903 38.7726 44.3069 38.556 44.5235 38.3574C44.5235 38.0144 44.5235 37.6895 44.5235 37.3466C44.5235 37.3105 44.5235 37.2924 44.5235 37.2744C44.2527 36.769 43.8375 36.4621 43.296 36.4079C43.296 32.0939 43.296 27.7978 43.296 23.5921C43.6931 23.3935 44.0361 23.213 44.4332 22.9964C44.4874 22.5271 44.5235 22.0397 44.5596 21.6968C44.2708 21.3718 44.0722 21.1372 43.9097 20.9567C42.6101 20.9567 41.3466 20.9567 40.2274 20.9567C39.9206 21.2274 39.704 21.426 39.4332 21.6787C39.4874 22.1119 39.5596 22.5993 39.6137 23.0144C40.0469 23.231 40.3899 23.4116 40.6968 23.574C40.6968 27.87 40.6968 32.1661 40.6968 36.426C40.5162 36.4621 40.3177 36.426 40.2455 36.5162C39.9928 36.769 39.5596 36.8412 39.4693 37.2563C39.4693 37.6173 39.4693 37.9783 39.4693 38.3394C39.6859 38.556 39.9025 38.7726 40.1191 38.9892Z" fill="white"/>
</svg>
`,
      iconName: 'Rest-API',
    },
    {
      icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M58.7259 16.6768L53.4085 24.1118L48.091 16.6768H50.9903C50.7692 11.1525 46.2059 6.7331 40.6284 6.7331C35.922 6.7331 31.9307 9.89168 30.6696 14.1941C29.1354 13.7002 27.5493 13.3882 25.9372 13.2452C26.1192 12.5563 26.3532 11.8674 26.6392 11.2045C27.4063 9.39775 28.4984 7.77296 29.8895 6.38215C31.2806 4.99133 32.9057 3.88648 34.7129 3.13258C36.5851 2.32669 38.5742 1.92374 40.6284 1.92374C42.6826 1.92374 44.6717 2.32669 46.5439 3.11958C48.351 3.88648 49.9762 4.97834 51.3673 6.36915C52.7584 7.75997 53.8505 9.38475 54.6176 11.1915C55.3586 12.9333 55.7617 14.779 55.8007 16.6768H58.7259Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M51.2893 58.0761V54.8786H32.9577C33.0877 54.8136 33.2178 54.7616 33.3478 54.6966C35.3369 53.7477 37.1701 52.5129 38.8082 51.0051C39.0292 50.7971 39.2373 50.6021 39.4323 50.4072C39.6533 50.1862 39.8873 49.9522 40.1083 49.7053C40.3684 49.4193 40.6284 49.1203 40.8624 48.8214H51.2893V45.6238L60 51.85L51.2893 58.0761Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.5287 34.9784C44.5287 37.747 43.9827 40.4376 42.9166 42.9723C42.0065 45.13 40.7324 47.1057 39.1463 48.8345C38.9382 49.0555 38.7302 49.2765 38.5222 49.4974C38.3272 49.6924 38.1322 49.8744 37.9372 50.0693C36.403 51.4862 34.6869 52.643 32.8147 53.5399C32.5547 53.6699 32.2817 53.7869 32.0087 53.9038C31.9957 53.9038 31.9957 53.9168 31.9827 53.9168C30.4225 54.5797 28.7454 54.9047 27.0422 54.9047H0V48.8605H25.1051C32.6977 48.8605 38.9252 42.7903 39.0292 35.1993C39.0292 35.1343 39.0292 35.0693 39.0292 35.0044C39.0292 26.7115 32.2947 19.9784 24 19.9784C15.7053 19.9524 8.97075 26.6725 8.97075 34.9784H12.455L6.22752 43.6872L0 34.9784H3.48429C3.48429 32.2097 4.03034 29.5191 5.09642 26.9844C6.13651 24.5408 7.60563 22.344 9.49079 20.4593C11.3759 18.5745 13.5731 17.0927 16.0173 16.0659C18.5525 15 21.2438 14.4541 24.013 14.4541C24.572 14.4541 25.1181 14.4801 25.6641 14.5191C27.2763 14.6491 28.8494 14.961 30.3835 15.468C30.9296 15.6499 31.4626 15.8449 31.9957 16.0789C34.4399 17.1187 36.637 18.5875 38.5222 20.4723C40.4074 22.357 41.8895 24.5538 42.9166 26.9974C43.9827 29.5191 44.5287 32.2097 44.5287 34.9784Z" fill="white"/>
</svg>
`,
      iconName: 'Scrum',
    },
    {
      icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_126480_894)">
<path d="M7.9 9.8V50.3C3 44.9 0 37.8 0 30C0 22.2 3 15.1 7.9 9.8Z" fill="white"/>
<path d="M11.1 14.2L28.4 48.9H11.1V14.2Z" fill="white"/>
<path d="M30 45L13 11.1H47L30 45Z" fill="white"/>
<path d="M30 0C37.8 0 44.9 3 50.2 7.9H9.79999C15.1 3 22.2 0 30 0Z" fill="white"/>
<path d="M48.9 48.9H31.6L48.9 14.2V48.9Z" fill="white"/>
<path d="M50.2 52.1C44.9 57 37.8 60 30 60C22.2 60 15.1 57 9.79999 52.1H50.2Z" fill="white"/>
<path d="M52.1 50.2V9.8C57 15.1 60 22.2 60 30C60 37.8 57 44.9 52.1 50.2Z" fill="white"/>
<path d="M11.1 14.2L28.4 48.9H11.1V14.2Z" fill="white"/>
<path d="M30 45L13 11.1H47L30 45Z" fill="white"/>
<path d="M31.6 48.9L48.9 14.2V48.9H31.6Z" fill="white"/>
<path d="M13 11.1H47L30 45L13 11.1Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_126480_894">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs>
</svg>
`,
      iconName: 'Material Design',
    },
  ];
}