setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버가 고장남.');
    } catch (err) {
        console.error(err);
    }
}, 1000);