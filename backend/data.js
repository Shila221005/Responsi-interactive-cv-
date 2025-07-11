const educationHistory = [
  {
    id: 1, period: '2023 - Sekarang', institution: 'Universitas AMIKOM Yogyakarta', major: 'S1 - Informatika'
  },
  {
    id: 2, period: '2020 - 2023', institution: 'SMA Swadharma Mopugad', major: 'MIPA'
  },
  {
    id: 3, period: '2017 - 2020', institution: 'SMP N 2 Dumoga'
  },
  {
    id: 4, period: '2010 - 2017', institution: 'SD N 2 Mopuya'
  }
];

const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Pemula' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' },
  { name: 'PostgreSQL', level: 'Pemula' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Pemula' },
];

const projects = [
  {
    title: 'Website Toko Online',
    image: '/images/ecommersImage.jpg', // PAKAI STRING PATH URL
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    image: '/images/ManajementTugasImage.jpg', // PAKAI STRING PATH URL
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#'
  }
];

module.exports = {
  educationHistory,
  skills,
  projects
};
