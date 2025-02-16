function showResult() {
    let results = [
        "🎉 تو یه دوبلور افسانه‌ای هستی! صدات توی تاریخ ثبت خواهد شد!",
        "😬 متاسفم، ولی تو به درد دوبله نمی‌خوری. برو کشاورزی کن.",
        "🎭 تو صدای خاصی داری، خاص به این معنی که هیچکس نمی‌خواد ازش استفاده کنه.",
        "😂 تو می‌تونی نقش پس‌زمینه رو بگیری! مثلاً بگی 'بله قربان' یا 'وای خدا مرغم پرید!'",
        "🔥 تو می‌تونی دوبلور بشی، ولی فقط برای فیلم‌های صامت.",
        "😆 تو صدای جذابی داری، ولی فقط وقتی که ساکتی!"
    ];

    let randomIndex = Math.floor(Math.random() * results.length);
    document.getElementById("result").innerText = results[randomIndex];

    document.getElementById("retry").style.display = "block";
}
