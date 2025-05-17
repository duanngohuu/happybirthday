$(window).load(function(){
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

    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$('document').ready(function(){
	var vw;
	$(window).resize(function(){
			vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
	});

	$('#streeeeeee').click(function(){
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			startCountdown();
		})
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow');

		setTimeout(function() {
			$('#bulb_yellow').addClass('bulb-glow-yellow-after');
			$('#bulb_red').addClass('bulb-glow-red-after');
			$('#bulb_blue').addClass('bulb-glow-blue-after');
			$('#bulb_green').addClass('bulb-glow-green-after');
			$('#bulb_pink').addClass('bulb-glow-pink-after');
			$('#bulb_orange').addClass('bulb-glow-orange-after');
			$('body').css('backgroud-color','#FFF');
			$('body').addClass('peach-after');
			
			setTimeout(function() {
				$('#bannar_coming').trigger('click');
			}, 2000);
		}, 5000);
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').trigger('click');
		});
	});

	function loopOne() {
		var randleft = 300 * Math.random();
		var randtop = 350 + (350 * Math.random()); // Range: 350 to 700
		$('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 300 * Math.random();
		var randtop = 350 + (350 * Math.random()); // Range: 350 to 700
		$('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 300 * Math.random();
		var randtop = 350 + (350 * Math.random()); // Range: 350 to 700
		$('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 300 * Math.random();
		var randtop = 350 + (350 * Math.random()); // Range: 350 to 700
		$('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 300 * Math.random();
		var randtop = 350 + (350 * Math.random()); // Range: 350 to 700
		$('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFive();
		});
	}
	function loopSix() {
		var randleft = 300 * Math.random();
		var randtop = 350 + (350 * Math.random()); // Range: 350 to 700
		$('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 300 * Math.random();
		var randtop = 350 + (350 * Math.random()); // Range: 350 to 700
		$('#b7').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').trigger('click');
		});
	});

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(5999).promise().done(function(){
			$('#light_candle').trigger('click');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#wish_message').trigger('click');
		});
	});

	$('#wish_message').click(function(){
		vw = $(window).width() / 2;

		const spacing = 90; // Adjust spacing between elements dynamically
		$('#b1,#b2,#b3,#b4').stop();
		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22');
		$('#b3').attr('id', 'b33');
		$('#b4').attr('id', 'b44');

		$('#b11').animate({ top: 210, left: vw - (2 * spacing) }, 500); // Leftmost
		$('#b22').animate({ top: 210, left: vw - (1 * spacing) }, 500); // Left-center
		$('#b33').animate({ top: 210, left: vw + (0 * spacing) }, 500); // Right-center
		$('#b44').animate({ top: 210, left: vw + (1 * spacing) }, 500); // Rightmost

		setTimeout(function() {
			$('#b5').animate({ top: '-300px', opacity: 0 }, 1000, function() {
				$(this).css('display', 'none');
			});
			$('#b6').animate({ top: '-300px', opacity: 0 }, 1000, function() {
				$(this).css('display', 'none');
			});
			$('#b7').animate({ top: '-300px', opacity: 0 }, 1000, function() {
				$(this).css('display', 'none');
			});
		}, 10000);

		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function() {
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});

		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i = i + 1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(3000);
				if (i == 50) {
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');

						// Access parent DOM to control song2 and song3
						const parentWindow = window.parent;
						const song2 = parentWindow.document.querySelector('.song2');
						const song3 = parentWindow.document.querySelector('.song3');

						if (song2 && song3) {
							// Gradually decrease volume of song2
							let volume2 = 1.0;
							const fadeOutInterval = setInterval(() => {
								if (volume2 > 0) {
									volume2 -= 0.1;
									song2.volume = Math.max(volume2, 0);
								} else {
									clearInterval(fadeOutInterval);
									song2.pause();
								}
							}, 200);
						}

						setTimeout(function () {
							// Set flag before starting microphone detection
							console.log('Setting isUsingMicrophone to true');
							window.isUsingMicrophone = true; // Make it global

							$('#messsssss').fadeOut('slow', function () {
								// Append a custom notification message
								const notification = $('<div></div>')
									.text('Em ước và thổi nến nè em')
									.css({
										position: 'fixed',
										bottom: '50px',
										left: '50%',
										maxWidth: '80vw',
										width: 'max-content',
										transform: 'translateX(-50%)',
										background: '#007bff',
										color: '#fff',
										padding: '5px 10px',
										borderRadius: '5px',
										boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
										fontSize: '16px',
										zIndex: 1000,
									})
									.hide()
									.appendTo('body')
									.fadeIn('slow');

								// Automatically fade out the notification after 5 seconds
								setTimeout(() => {
									notification.fadeOut('slow', () => {
										notification.remove();
									});
								}, 3000);
							});
							$('body').fadeOut('slow', function () {
								$(this).addClass('peach-dark').fadeIn('slow');
							});
						}, 2000);
					});
				} else {
					msgLoop(i);
				}	
			});
		}

		msgLoop(0);
		
	});
});

// Countdown function
function startCountdown() {
	let countdown = 10;
	$('#showtimeeee').text(`Em chuẩn bị tinh thần chưa nè.`);
	const interval = setInterval(() => {
		$('#showtimeeee').text(`đếm ngược ${countdown} giây nữa nha em.`);
		countdown--;

		if (countdown < 0) {
			clearInterval(interval);
			$('#showtimeeee').text('Bắt đầu');
			$('#turn_on').trigger('click');
		}
	}, 1000);
}

window.addEventListener('message', (event) => {
    console.log('Message received:', event.data);
    if (event.data.type === 'MICROPHONE_STREAM') {
        // Request microphone access directly instead of trying to match devices
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                console.log('Successfully got microphone stream in iframe');
                handleMicrophoneStream(stream);
            })
            .catch((err) => {
                console.error('Error accessing microphone in iframe:', err);
            });
    }
});

function handleMicrophoneStream(stream) {
    if (!window.isUsingMicrophone) {
        setTimeout(() => handleMicrophoneStream(stream), 1000);
        return;
    }

    let audioContext;
    try {
        // Try to resume AudioContext for mobile browsers
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        // Force audio output to speaker on mobile
        if (audioContext.setSinkId && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            audioContext.setSinkId('speaker')
                .catch(e => console.log('Cannot set audio output to speaker:', e));
        }

        // Force media playback through speaker
        const song3 = window.parent.document.querySelector('.song3');
        if (song3) {
            song3.setSinkId && song3.setSinkId('speaker')
                .catch(e => console.log('Cannot set song output to speaker:', e));
            // Fallback: try to force audio routing
            song3.setAttribute('x-webkit-airplay', 'allow');
            song3.setAttribute('playsinline', 'true');
        }
    } catch (e) {
        console.error('Audio Context error:', e);
        return;
    }

    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    analyser.fftSize = 1024; // Increased for better sensitivity
    analyser.smoothingTimeConstant = 0.8; // Add smoothing
    microphone.connect(analyser);

    let startTime = Date.now();
    let skipButtonShown = false;

    // Add volume display
    // const volumeDisplay = $('<div></div>')
    //     .css({
    //         position: 'fixed',
    //         bottom: '10px',
    //         right: '10px',
    //         background: 'rgba(0,0,0,0.02)',
    //         color: '#fff',
    //         padding: '5px 10px',
    //         borderRadius: '5px',
    //         fontSize: '14px',
    //         zIndex: 999999,
    //     })
    //     .appendTo('body');

    function detectBlow() {
        if (!skipButtonShown && window.isUsingMicrophone && (Date.now() - startTime > 60000)) {
            skipButtonShown = true;
            const skipButton = $('<div></div>')
                .text('Bấm vào đây nếu em ko thổi được nè')
                .css({
                    position: 'fixed',
                    bottom: '50px',
                    left: '50%',
                    maxWidth: '80vw',
                    width: 'max-content',
                    transform: 'translateX(-50%)',
                    background: '#ff8c00', // Màu cam
                    color: '#fff',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    fontSize: '16px',
                    zIndex: 1000,
                    cursor: 'pointer'
                })
                .click(function() {
                    window.isUsingMicrophone = false;
                    $('.fuego').fadeOut('slow', function () {
                        $(this).removeClass('fuego');
                    });
                    stream.getTracks().forEach(track => track.stop());
                    $(this).remove();
                    
                    setTimeout(function () {
                        $('body').css('transition', 'background-color 1s ease-in-out, opacity 1s ease-in-out');
                        $('body').css('background-color', 'rgba(0, 0, 0, 0.8)');
                        setTimeout(() => {
                            $('body').removeClass('peach-dark');
                        }, 2500);

                        const song3 = window.parent.document.querySelector('.song3');
                        if (song3) {
                            song3.volume = 0;
                            song3.play();
                            let volume3 = 0.0;
                            const fadeInInterval = setInterval(() => {
                                if (volume3 < 1.0) {
                                    volume3 += 0.1;
                                    song3.volume = Math.min(volume3, 1.0);
                                } else {
                                    clearInterval(fadeInInterval);
                                }
                            }, 200);
                        }

						// Show success notification
						$('#messsssss').fadeOut('slow', function () {
							const notification = $('<div></div>')
								.text('Chúc mừng sinh nhật em yêu')
								.css({
									position: 'fixed',
									bottom: '50px',
									left: '50%',
									maxWidth: '80vw',
									width: 'max-content',
									transform: 'translateX(-50%)',
									background: '#007bff',
									color: '#fff',
									padding: '5px 10px',
									borderRadius: '5px',
									boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
									fontSize: '16px',
									zIndex: 1000,
								})
								.hide()
								.appendTo('body')
								.fadeIn('slow');

							// Automatically fade out the notification after 5 seconds
							// setTimeout(() => {
							//     notification.fadeOut('slow', () => {
							//         notification.remove();
							//     });
							// }, 3000);
						});
                    }, 5000);
                })
                .hide()
                .appendTo('body')
                .fadeIn('slow');
        }

        analyser.getByteFrequencyData(dataArray);
        // Tập trung vào tần số thấp hơn cho tiếng thổi
        const lowFreqs = dataArray.slice(0, Math.floor(dataArray.length * 0.3));
        const averageVolume = lowFreqs.reduce((a, b) => a + b, 0) / lowFreqs.length;

        console.log('Average Volume:', averageVolume);

        // Update volume display
        // volumeDisplay.text(`Volume: ${Math.round(averageVolume)}`);

        // Điều chỉnh ngưỡng cho mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const blowThreshold = isMobile ? 30 : 24; // Giảm ngưỡng cho mobile
        const softBlowThreshold = isMobile ? 25 : 18;

        if (averageVolume >= blowThreshold) {
            window.isUsingMicrophone = false;

            console.log('Blow detected!');

            // Fade out the flames
            $('.fuego').fadeOut('slow', function () {
                $(this).removeClass('fuego');
            });

            // Stop microphone access
            stream.getTracks().forEach(track => track.stop());

			// Show success notification
			$('#messsssss').fadeOut('slow', function () {
				const notification = $('<div></div>')
					.text('Chúc mừng sinh nhật em yêu')
					.css({
						position: 'fixed',
						bottom: '50px',
						left: '50%',
						maxWidth: '80vw',
						width: 'max-content',
						transform: 'translateX(-50%)',
						background: '#007bff',
						color: '#fff',
						padding: '5px 10px',
						borderRadius: '5px',
						boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
						fontSize: '16px',
						zIndex: 1000,
					})
					.hide()
					.appendTo('body')
					.fadeIn('slow');

				// Automatically fade out the notification after 5 seconds
				// setTimeout(() => {
				//     notification.fadeOut('slow', () => {
				//         notification.remove();
				//     });
				// }, 3000);
                });

            // Display success message and handle post-blow logic
            setTimeout(function () {
                $('body').css('transition', 'background-color 1s ease-in-out, opacity 1s ease-in-out');
                $('body').css('background-color', 'rgba(0, 0, 0, 0.8)');
                setTimeout(() => {
                    $('body').removeClass('peach-dark');
                }, 2500);

                // Gradually increase volume of song3
                const song3 = window.parent.document.querySelector('.song3'); // Access song3 from parent
                if (song3) {
                    song3.volume = 0;
                    song3.play();
                    let volume3 = 0.0;
                    const fadeInInterval = setInterval(() => {
                        if (volume3 < 1.0) {
                            volume3 += 0.1;
                            song3.volume = Math.min(volume3, 1.0);
                        } else {
                            clearInterval(fadeInInterval);
                        }
                    }, 200);
                }
            }, 5000);
        } else if (averageVolume >= softBlowThreshold && averageVolume < blowThreshold) {
            // Encourage the user to blow harder
            $('#messsssss').fadeOut('slow', function () {
                const notification = $('<div></div>')
                    .text('Em thổi mạnh lên tý nữa nàooo')
                    .css({
                        position: 'fixed',
                        bottom: '50px',
                        left: '50%',
                        transform: 'translateX(-50%)',
						maxWidth: '80vw',
						width: 'max-content',
                        background: '#007bff',
                        color: '#fff',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                        fontSize: '16px',
                        zIndex: 1000,
                    })
                    .hide()
                    .appendTo('body')
                    .fadeIn('slow');

                // Automatically fade out the notification after 5 seconds
                setTimeout(() => {
                    notification.fadeOut('slow', () => {
                        notification.remove();
                    });
                }, 2500);
            });
            requestAnimationFrame(detectBlow); // Continue detection
        } else {
            // Continue detecting
            requestAnimationFrame(detectBlow);
        }
    }

    // Thêm xử lý touch để kích hoạt audio context trên mobile
    document.addEventListener('touchstart', function() {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    }, {once: true});

    detectBlow();
}