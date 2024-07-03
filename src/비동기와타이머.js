const callback = () => {
    console.log('2초마다 실행됩니다');
    setTimeout(callback, 2000);
}




setTimeout(callback, 2000);
