var i = 0
document.write('0 – это ноль' + '</br>');
do {
  if (i % 2 != 0) {
    document.write(i + ' нечетное число' + '</br>');
  } else {
    document.write(i + ' четное число' + '</br>');
  }
  i++;
} while (i <= 10);
