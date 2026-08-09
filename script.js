const music = document.getElementById("birthdayMusic");


// Start the birthday surprise
function startSurprise() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("birthdayPage").classList.remove("hidden");

    // Try to start music
    music.play().catch(() => {
        console.log("Music needs user interaction.");
    });

    createHearts();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Play / pause music
function toggleMusic() {

    const button = document.querySelector(".music-button");

    if (music.paused) {

        music.play();

        button.innerHTML = "🔊 Music On";

    } else {

        music.pause();

        button.innerHTML = "🔇 Music Off";
    }
}


// Open gift
function openGift() {

    const message = document.getElementById("giftMessage");

    message.classList.remove("hidden");

    createConfetti();

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// Floating hearts
function createHearts() {

    const container = document.querySelector(".hearts");

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = ["❤️", "💗", "💕", "💖", "💓"][
            Math.floor(Math.random() * 5)
        ];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.zIndex = "999";
        heart.style.pointerEvents = "none";

        heart.style.transition = "transform 6s linear, opacity 6s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-110vh) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 900);
}


// Confetti
function createConfetti() {

    const colors = [
        "#ff6f9c",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ef476f",
        "#c77dff"
    ];

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";

        confetti.style.zIndex = "1000";

        confetti.style.borderRadius = "2px";

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}