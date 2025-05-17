$(document).ready(() => {
    // Disable user selection of text and images
    $('body').css({
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
    });

    // Check if the current date is in May 2025
    const currentDate = new Date();
    if (currentDate.getFullYear() !== 2025 || currentDate.getMonth() !== 4) { // Month is 0-indexed, so 4 = May
        // Display a blank screen with a message
        $('body').html('<div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 24px; color: gray;">Cùng nhau ôn lại kỷ niệm.</div>');
        return; // Stop further execution
    }

    // Request microphone access
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
        console.log('Microphone access granted');
        // Password confirmation before starting the app
        confirmPassword(() => {
            // Send the stream to the iframe
            const iframe = document.querySelector('.banhkem iframe');
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage({ type: 'MICROPHONE_STREAM', streamId: stream.id }, '*');
            }
            startApp(); // Start the app after microphone access is granted
        });
    })
    .catch((error) => {
        console.error('Microphone access denied', error);
        // Retry microphone access until granted
        Swal.fire({
            title: 'Ứng dụng cần quyền truy cập micro để tiếp tục.',
            text: 'Vui lòng cấp quyền truy cập micro.',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: 'green',
            confirmButtonText: 'Thử lại',
        }).then(() => {
            location.reload(); // Reload the page to retry
        });
    });

    const confirmPassword = (callback) => {
        Swal.fire({
            title: 'Nhập mật khẩu để tiếp tục',
            input: 'password',
            inputAttributes: {
                autocapitalize: 'off',
                placeholder: 'Nhập mật khẩu'
            },
            showCancelButton: false,
            confirmButtonText: 'Xác nhận',
            showLoaderOnConfirm: true,
            preConfirm: (password) => {
                // Encode với base64 và thêm salt
                const salt = "HpBd";
                const encoded = btoa(salt + password);
                const target = "SHBCZDE5MDU5Nw=="; // Đã được mã hóa sẵn
                
                if (encoded === target) {
                    return true;
                } else {
                    Swal.showValidationMessage('Mật khẩu không đúng!');
                    return false;
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                callback(); // Proceed to startApp if password is correct
            } else {
                Swal.fire({
                    title: 'Sai mật khẩu!',
                    text: 'Trang sẽ tải lại.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                }).then(() => {
                    location.reload(); // Reload the page on incorrect password
                });
            }
        });
    };

    const startApp = () => {
        // Check if device is in a call
        if (navigator.mediaDevices && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            Swal.fire({
                title: 'Em đang trong cuộc gọi phải không?',
                text: 'Em thoát cuộc gọi trước rồi vào lại nha, hoặc em có thể chọn tiếp tục nhưng sẽ không nghe được nhạc.',
                icon: 'warning',
                showDenyButton: true,
                confirmButtonText: 'Thoát để vào lại',
                denyButtonText: 'Tiếp tục không có nhạc',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                    return;
                }
                // If user chooses to continue without audio
                startAppWithoutAudio();
            });
        } else {
            startNormalApp();
        }
    };

    const startAppWithoutAudio = () => {
        Swal.fire({
            title: 'Em yêu chuẩn bị tinh thần chưa nè, sắp có bất ngờ nì, em giảm âm lượng điện thoại lại kẻo giật mình nha em.',
            icon: '',
            showCancelButton: false,
            confirmButtonColor: 'green',
            confirmButtonText: 'để em mở xem có gì mà bất ngờ',
        }).then((result) => {
            if (result.isConfirmed) {
                const song = document.querySelector('.song');
                // Force audio through speaker on mobile
                if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                    song.setAttribute('x-webkit-airplay', 'allow');
                    song.setAttribute('playsinline', 'true');
                    if (song.setSinkId) {
                        song.setSinkId('speaker')
                            .catch(e => console.log('Cannot set song output to speaker:', e));
                    }
                }
                song.play();
                animationTimeline();
            }
        });
    };

    const startNormalApp = () => {
        Swal.fire({
            title: 'Em yêu chuẩn bị tinh thần chưa nè, sắp có bất ngờ nì, em giảm âm lượng điện thoại lại kẻo giật mình nha em.',
            icon: '',
            showCancelButton: false,
            confirmButtonColor: 'green',
            confirmButtonText: 'để em mở xem có gì mà bất ngờ',
        }).then((result) => {
            if (result.isConfirmed) {
                const song = document.querySelector('.song');
                // Force audio through speaker on mobile
                if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                    song.setAttribute('x-webkit-airplay', 'allow');
                    song.setAttribute('playsinline', 'true');
                    if (song.setSinkId) {
                        song.setSinkId('speaker')
                            .catch(e => console.log('Cannot set song output to speaker:', e));
                    }
                }
                song.play();
                animationTimeline();
            }
        });
    };

    // animation timeline
    const animationTimeline = () => {
        // split chars that needs to be animated individually
        const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
        const hbd = document.getElementsByClassName("wish-hbd")[0];

        textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
            .split("")
            .join("</span><span>")}</span>`;

        hbd.innerHTML = `<span>${hbd.innerHTML
            .split("")
            .join("</span><span>")}</span>`;

        const ideaTextTrans = {
            opacity: 0,
            y: -20,
            rotationX: 5,
            skewX: "15deg"
        }

        const ideaTextTransLeave = {
            opacity: 0,
            y: 20,
            rotationY: 5,
            skewX: "-15deg"
        }

        // timeline
        const tl = new TimelineMax();

        tl.to(".container", 0.6, {
            visibility: "visible"
        })
        .from(".one", 0.7, {
            opacity: 0,
            y: 10
        })
        .from(".two", 0.4, {
            opacity: 0,
            y: 10
        })
        .to(".one",
            0.7,
            {
                opacity: 0,
                y: 10
            },
        "+=5.5")
        .to(".two",
            0.7,
            {
                opacity: 0,
                y: 10
            },
        "-=1")
        .from(".three", 0.7, {
            opacity: 0,
            y: 10
        })
        .to(".three",
            0.7,
            {
                opacity: 0,
                y: 10
            },
        "+=10")
        .from(".four", 0.7, {
            scale: 0.2,
            opacity: 0,
        })
        .from(".fake-btn", 0.3, {
            scale: 0.2,
            opacity: 0,
        })
        .staggerTo(
            ".hbd-chatbox span",
            1.5, {
                visibility: "visible",
            },
            0.05
        )
        .to(".fake-btn", 0.1, {
            backgroundColor: "rgb(127, 206, 248)",
        },
        "+=4")
        .to(
            ".four",
            0.5, {
                scale: 0.2,
                opacity: 0,
                y: -150
            },
        "+=1")
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=4.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=7.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.7, {
            scale: 1.2,
            x: 10,
            backgroundColor: "orange",
            color: "#fff",
        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
        .from(
            ".idea-5",
            0.7, {
                rotationX: 15,
                rotationZ: -10,
                skewY: "-5deg",
                y: 50,
                z: 10,
                opacity: 0,
            },
            "+=3.5"
        )
        .to(
            ".idea-5 span",
            0.7, {
                rotation: 90,
                x: 8,
            },
            "+=3.4"
        )
        .to(
            ".idea-5",
            0.7, {
                scale: 0.2,
                opacity: 0,
            },
            "+=4"
        )
        .staggerFrom(
            ".idea-6 span",
            0.8, {
                scale: 3,
                opacity: 0,
                rotation: 15,
                ease: Expo.easeOut,
            },
            0.2
        )
        .staggerTo(
            ".idea-6 span",
            0.8, {
                scale: 3,
                opacity: 0,
                rotation: -15,
                ease: Expo.easeOut,
            },
            0.2,
            "+=3.5"
        )
        .staggerFromTo(
            ".baloons img",
            2.5, {
                opacity: 0.9,
                y: 1400,
            }, {
                opacity: 1,
                y: -1000,
            },
            0.2
        )
        .from(
            ".profile-picture",
            0.5, {
                scale: 3.5,
                opacity: 0,
                x: 25,
                y: -25,
                rotationZ: -45,
            },
            "-=4"
        )
        .from(".hat", 0.5, {
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0,
        })
        .staggerFrom(
            ".wish-hbd span",
            0.7, {
                opacity: 0,
                y: -50,
                // scale: 0.3,
                rotation: 150,
                skewX: "30deg",
                ease: Elastic.easeOut.config(1, 0.5),
            },
            0.1
        )
        .staggerFromTo(
            ".wish-hbd span",
            0.7, {
                scale: 1.4,
                rotationY: 150,
            }, {
                scale: 1,
                rotationY: 0,
                color: "#ff69b4",
                ease: Expo.easeOut,
            },
            0.1,
            "party"
        )
        .from(
            ".wish h5",
            0.5, {
                opacity: 0,
                y: 10,
                skewX: "-15deg",
            },
            "party"
        )
        .staggerTo(
            ".eight svg",
            1.5, {
                visibility: "visible",
                opacity: 0,
                scale: 80,
                repeat: 3,
                repeatDelay: 1.4,
            },
            0.3
        )
        .to(".six", 0.5, {
            opacity: 0,
            y: 30,
            zIndex: "-1",
        })
        .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
        .to(
            ".last-smile",
            0.5, {
                rotation: 90,
            },
            "+=3"
        );

        // Restart Animation on click
        const replyBtn = document.getElementById("dithoinen");
        replyBtn.addEventListener("click", () => {

            // hiển thị trang thổi nến và thổi
            const birthdayPage = document.querySelector(".thu.container");
            birthdayPage.style.display = "none";
            
            // Gradually decrease volume of currentSong
            const currentSong = document.querySelector('.song');
            if (currentSong) {
                let volume = 1.0;
                const fadeOutInterval = setInterval(() => {
                    if (volume > 0) {
                        volume -= 0.1;
                        currentSong.volume = Math.max(volume, 0);
                    } else {
                        clearInterval(fadeOutInterval);
                        currentSong.pause();
                        currentSong.currentTime = 0;
                    }
                }, 200);
            }

            setTimeout(() => {
                // Gradually increase volume of newSong
                const newSong = document.querySelector('.song2');
                if (newSong) {
                    // Force audio through speaker on mobile
                    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                        newSong.setAttribute('x-webkit-airplay', 'allow');
                        newSong.setAttribute('playsinline', 'true');
                        if (newSong.setSinkId) {
                            newSong.setSinkId('speaker')
                                .catch(e => console.log('Cannot set song2 output to speaker:', e));
                        }
                    }
                    newSong.volume = 0;
                    newSong.play();
                    let volume = 0.0;
                    const fadeInInterval = setInterval(() => {
                        if (volume < 1.0) {
                            volume += 0.1;
                            newSong.volume = Math.min(volume, 1.0);
                        } else {
                            clearInterval(fadeInInterval);
                        }
                    }, 200);
                }
            }, 3000);

            const banhkem = document.querySelector(".banhkem");
            if (banhkem) {
                banhkem.style.display = "block";
                banhkem.classList.add("showbanhkem");

                // Access the iframe and its content
                const iframe = banhkem.querySelector("iframe");
                if (iframe && iframe.contentWindow) {
                    const iframeDocument = iframe.contentWindow.document;

                    // Example: Access an element inside the iframe
                    const turnOnButton = iframeDocument.getElementById("streeeeeee");
                    if (turnOnButton) {
                        turnOnButton.click(); // Trigger a click event on the button inside the iframe
                    } else {
                        console.error("Element '#streeeeeee' not found inside the iframe.");
                    }
                } else {
                    console.error("Iframe not found or inaccessible.");
                }
            } else {
                console.error("Element '.banhkem' not found.");
            }
        });
    }

});

