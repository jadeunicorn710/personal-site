import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.
// import { Icon } from '@iconify/react';
// import leetcodeIcon from '@iconify/icons-cib/leetcode';

const data = [
  {
    link: 'https://github.com/jadeunicorn710',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://leetcode.com/Jadeunicorn710/',
    label: 'LeetCode',
    icon: faCalendarCheck,
  },
  {
    link: 'https://www.linkedin.com/in/yunlinqi/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:qiyunlin710@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
