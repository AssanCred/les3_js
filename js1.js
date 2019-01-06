nextPrime:
  for (var i = 2; i <= 100; i++) {

    for (var j = 2; j < i / 2; j++) {
      if (i % j == 0) continue nextPrime;
    }

    document.write(i + '</br> ');
  }
