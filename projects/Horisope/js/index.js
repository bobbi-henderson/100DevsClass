document.querySelector('#submit').addEventListener('click', function(){
    let date = document.querySelector('#birthday').value
    let dateArr = date.split('-')
    let monthAndDay = parseInt(`${dateArr[1]}${dateArr[2]}`)


    if (monthAndDay >= 120 && monthAndDay <= 218){
        document.querySelector('#sign').innerHTML ='You is an Aquarius'
        document.querySelector('#horiscope').innerHTML = 'Is a bit of redecorating in order? This is a perfect time to spruce up your home. Rather than rush into a project that you might later regret, Aquarius, its better to spend the day with color and fabric swatches. Once youre happy with a scheme, then you can pick up a paintbrush. Think hard before making a decision.'
    } else if (monthAndDay >= 219 && monthAndDay <= 320){
        document.querySelector('#sign').innerHTML ='You is a Pisces'
        document.querySelector('#horiscope').innerHTML = 'You have the creative ability to make a real go of your music or writing. Why not put it to better use? Are you afraid to take the risk? Today you may be inspired to rise above your fear as you read a book or hear a piece of music that moves you to want to create one of your own. Its never too late to get started, Pisces.'
    }else if (monthAndDay >= 321 && monthAndDay <= 419){
        document.querySelector('#sign').innerHTML ='You is an Aries'
        document.querySelector('#horiscope').innerHTML = 'Prosperity isnt just around the corner - its here, Aries. Your finances are looking better than ever. Dont rely on this money, however. The whole point of a windfall is that its unexpected, and thus can be used for luxuries or indulgences that you wouldnt normally allow yourself. If you begin to spend a windfall before it arrives, its no longer a windfall but just another paycheck.'
    } else if (monthAndDay >= 420 && monthAndDay <= 520){
        document.querySelector('#sign').innerHTML ='You is a Taurus'
        document.querySelector('#horiscope').innerHTML = 'Youve never looked better, Taurus. As a result, people are drawn to you and you have an unusually large circle of friends. This is fun but time consuming, as everyone seems to want a piece of you. Try to keep your feet on the ground. Dont let your vision become clouded by all the flattery you receive.'
    } else if (monthAndDay >= 521 && monthAndDay <= 620){
        document.querySelector('#sign').innerHTML ='You is a Gemini'
        document.querySelector('#horiscope').innerHTML = 'Youve always been interested in the arts, and now you want to explore that interest on a deeper level. A visit to a museum isnt likely to do the trick, Gemini. Instead, why not enroll in a class or sign up for a lecture series? A few artists, in particular, capture your interest. Make it a point to concentrate on them first.'
    } else if (monthAndDay >= 621 && monthAndDay <= 722){
        document.querySelector('#sign').innerHTML ='You is a Cancer'
        document.querySelector('#horiscope').innerHTML = 'Errands seem to rule the day. You spend most of it in the car, running hither and yon. Dont be surprised if you run into an old friend you havent seen in a while. The casual pleasantries you exchange could develop into something more. Perhaps you will discover a common interest and decide to build a business based on it. Keep your eyes (and mind) wide open.'
    } else if (monthAndDay >= 723 && monthAndDay <= 822){
        document.querySelector('#sign').innerHTML ='You is a Leo'
        document.querySelector('#horiscope').innerHTML = 'Prosperity isnt just around the corner - its here, Aries. Your finances are looking better than ever. Dont rely on this money, however. The whole point of a windfall is that its unexpected, and thus can be used for luxuries or indulgences that you wouldnt normally allow yourself. If you begin to spend a windfall before it arrives, its no longer a windfall but just another paycheck.'
    } else if (monthAndDay >= 823 && monthAndDay <= 922){
        document.querySelector('#sign').innerHTML ='You is a Virgo'
        document.querySelector('#horiscope').innerHTML = 'The planetary configuration makes you likely to reap the benefits of all your hard work, Leo. The little windfall you receive is nice, to be sure, but dont think of all of it as fun money. Put a good amount aside in a savings or investment account. You can use the rest to kick up your heels a bit. Why not invite a friend to dinner at the nicest restaurant in town?'
    } else if (monthAndDay >= 923 && monthAndDay <= 1022){
        document.querySelector('#sign').innerHTML ='You is a Libra'
        document.querySelector('#horiscope').innerHTML = 'Theres passion in the air today, Libra. You can feel it. The feeling is so strong that the air almost pulsates. What are you going to do about it? If youre in a romantic relationship, plan an intimate evening together, free of chores and daily tasks. If youre single, peruse your little black book and see if there are any relationships worth warming up.'
    } else if (monthAndDay >= 1023 && monthAndDay <= 1121){
        document.querySelector('#sign').innerHTML ='You is a Scorpio'
        document.querySelector('#horiscope').innerHTML = 'Has the opposite sex always been so attractive? Today they seem especially so, Scorpio, and capture your attention right and left. One person, in particular, youve always considered a platonic friend, but today seems interested in you romantically. Perhaps this person is just picking up on your vibes. He or she may make a wonderful partner, so dont immediately dismiss the idea.'
    } else if (monthAndDay >= 1122 && monthAndDay <= 1221){
        document.querySelector('#sign').innerHTML ='You is a Sagittarius'
        document.querySelector('#horiscope').innerHTML = 'Your poise and gracious nature serve you well now, Sagittarius. The best thing you can do today is spend time around other people. Go to a party or other social gathering tonight. The evening is bound to be a resounding success as you radiate warmth and energy and people respond in kind. Allow everyone the pleasure of basking in your glow.'
    } else {
        document.querySelector('#sign').innerHTML ='You is a Capricorn'
        document.querySelector('#horiscope').innerHTML = 'Creativity and romance are a good combination, Capricorn, and today both are in top form. Why not get out the good stationery and craft a love note that will set that special someones heart aflutter? Cater to your romantic nature, ideally with a partner at your side. Even if youre alone, a bubble bath will do wonders for your soul.'
    }  
  })