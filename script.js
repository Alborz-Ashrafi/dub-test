function showResult() {
    let results = [
        "🎉 تو یه دوبلور افسانه‌ای هستی! صدات توی تاریخ ثبت خواهد شد!",
        "😬 متاسفم، ولی تو به درد دوبله نمی‌خوری. برو باشگاه .. بدبخت افسرده  ",
        "🎭 تو صدای خاصی داری، خاص به این معنی که هیچکس نمی‌خواد ازش استفاده کنه.",
        "😂 تو می‌تونی نقش پس‌زمینه رو بگیری! مثلاً صدای درخت در بیاری '",
        "🔥 تو می‌تونی دوبلور بشی، ولی فقط برای فیلم‌های صامت.",
        "😆 تو صدای جذابی داری، ولی فقط وقتی که ساکتی!"
    ];

    let randomIndex = Math.floor(Math.random() * results.length);
    let resultDiv = document.getElementById("result");

    resultDiv.innerText = results[randomIndex];
    resultDiv.style.opacity = "1";
    resultDiv.classList.remove("hidden");

    document.getElementById("retry").classList.remove("hidden");
}
