document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("noBtn");
    const yesButton = document.getElementById("yesBtn");
    const backgroundMusic = document.getElementById("backgroundMusic");

    const romanticLines = [
        "Itni shiddat se maine tumhe paane ki koshish ki hai, ki har zarre ne mujhe tumse milane ki saazish ki hai.",
        "Taqdeerein badal jaati hai, zamana badal jaata hai, mulkon ki tarikh badal jaati hai, Shahenshah badal jaate hai ... magar is badalti hui duniya mein mohabbat jis insaan ka daaman thaam leti hai ... woh insaan nahi badalta.",
        "Mohabbat bhi zindagi ki tarah hoti hai, har mod aasaan nahin hota, har mod par khushi nahin milti, par jab hum zindagi ka saath nahin chhorte, to mohabbat ka saath kyon chhorein.",
        "Hum se bachkar jaaoge kaise.. apne dil se hame nikaaloge kaise .. hum woh khushbu hai jo saason mein baste hain …. kud ki saanson ko rok paaoge kaise.",
        "Pyar toh bahut log karte hai; lekin mere jaisa pyar koi nahi kar sakta kyun ki kisi ke paas tum joh nahi ho."
    ];

    function showRomanticLine() {
        const randomLine = romanticLines[Math.floor(Math.random() * romanticLines.length)];
        alert(randomLine);
    }

    noButton.addEventListener("click", function() {
        showRomanticLine();
    });

    yesButton.addEventListener("click", function() {
        alert("Yay! I knew you'd say yes! ❤️");
    });

    // Ensure background music plays
    function playMusic() {
        backgroundMusic.play().catch(function() {
            document.body.addEventListener('click', playMusic, { once: true });
        });
    }

    playMusic();

    // Emoji background
    const emojiBackground = document.createElement('div');
    emojiBackground.style.position = 'fixed';
    emojiBackground.style.top = '0';
    emojiBackground.style.left = '0';
    emojiBackground.style.width = '100%';
    emojiBackground.style.height = '100%';
    emojiBackground.style.zIndex = '-1';
    emojiBackground.style.overflow = 'hidden';
    emojiBackground.style.pointerEvents = 'none';
    emojiBackground.style.fontSize = '2rem';
    emojiBackground.style.display = 'flex';
    emojiBackground.style.flexWrap = 'wrap';
    emojiBackground.style.justifyContent = 'center';
    emojiBackground.style.alignItems = 'center';
    emojiBackground.style.opacity = '0.1';
    emojiBackground.innerHTML = "🥺👉👈".repeat(1000);
    document.body.appendChild(emojiBackground);
});
