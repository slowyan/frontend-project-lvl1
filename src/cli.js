import readlineSync from 'readline-sync';

const nameUser = () => {
  const name = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  return name;
};

export default nameUser;
