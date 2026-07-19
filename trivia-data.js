window.triviaDatabase = {
    "amateur": [
        {
            question: "You hit your ball into deep rough. How much time are you allowed to search for your ball before it is officially declared lost?",
            choices: [
                { text: "3 minutes.", scoreChange: 0, correct: true },
                { text: "5 minutes.", scoreChange: 1 },
                { text: "10 minutes.", scoreChange: 2 }
            ],
            explanation: "If your ball gets lost, you have 3 minutes to look for it. A ball that is not found in three minutes after you or your caddie begins to search for it is considered lost.",
            example: "Example: During the 2019 Open Championship, several players fell victim to the strict 3-minute search rule in the thick fescue."
        },
        {
            question: "You realize on the 2nd hole that you accidentally left your practice 7-iron in the bag, meaning you started the round with 15 clubs. What is the penalty in Stroke Play?",
            choices: [
                { text: "2 penalty strokes per hole for a maximum of 4 penalty strokes.", scoreChange: 0, correct: true },
                { text: "Immediate Disqualification.", scoreChange: 2 },
                { text: "A flat 2-stroke penalty for the round.", scoreChange: 1 }
            ],
            explanation: "A player is limited to no more than 14 clubs during a round. The penalty is two strokes for each hole where a breach happened, with a maximum of four penalty strokes per round.",
            example: "Example: Ian Woosnam famously realized he had 15 clubs in his bag on the 2nd tee of the final round at the 2001 Open Championship."
        },
        {
            question: "You are taking a practice swing on the tee box and accidentally clip your teed-up ball, knocking it off the tee. What is the ruling?",
            choices: [
                { text: "1 penalty stroke, play it where it lies.", scoreChange: 1 },
                { text: "It counts as a stroke, play it where it lies.", scoreChange: 2 },
                { text: "No penalty. Re-tee the ball.", scoreChange: 0, correct: true }
            ],
            explanation: "If a ball falls off the tee or you knock it off the tee before you have made a stroke at it, it is not in play and you may re-tee it without penalty.",
            example: "Example: Zach Johnson accidentally hit his ball off the tee with a practice swing on the 13th hole during the 2019 Masters, and simply re-teed it without penalty."
        },
        {
            question: "Your ball lands in a bunker. Right next to your ball is a dead leaf and a small twig. What is the ruling for moving them?",
            choices: [
                { text: "You may remove them without penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke for touching loose impediments in a hazard.", scoreChange: 1 },
                { text: "2 penalty strokes if your hand touches the sand while moving them.", scoreChange: 2 }
            ],
            explanation: "You may remove a loose impediment anywhere on or off the course without penalty. You may touch and remove loose impediments in a bunker without penalty.",
            example: "Example: Prior to 2019, players were severely restricted in bunkers, but modern rules allow the removal of loose impediments like leaves and twigs."
        },
        {
            question: "You are on the putting green taking a practice stroke and accidentally bump your ball with your putter. It rolls two feet away.",
            choices: [
                { text: "1 penalty stroke, replace the ball.", scoreChange: 1 },
                { text: "Play it as it lies, no penalty.", scoreChange: 2 },
                { text: "No penalty, but you must replace the ball.", scoreChange: 0, correct: true }
            ],
            explanation: "If you accidentally cause your ball or ball-marker to move on the putting green, there is no penalty. The ball must be replaced on its original spot.",
            example: "Example: Dustin Johnson was penalized at the 2016 US Open when his ball moved on the green, leading the USGA to change this specific rule."
        },
        {
            question: "Your putt stops right on the lip of the hole, overhanging the edge. How long are you allowed to wait to see if it falls in?",
            choices: [
                { text: "10 seconds after reaching the hole.", scoreChange: 0, correct: true },
                { text: "As long as you want.", scoreChange: 2 },
                { text: "5 seconds after reaching the hole.", scoreChange: 1 }
            ],
            explanation: "You are allowed a reasonable time to reach the hole and ten extra seconds to see whether the ball will fall into the hole. If it falls in after that time, you must add one penalty stroke.",
            example: "Example: Tour players often nervously watch their ball for exactly 10 seconds before tapping it in."
        },
        {
            question: "You are unsure what club to hit, so you ask another player in your group what club they just used.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty, as long as they haven't putted yet.", scoreChange: 2 },
                { text: "General Penalty (2 strokes in stroke play).", scoreChange: 0, correct: true }
            ],
            explanation: "During a round, a player must not ask anyone for advice, other than the player's caddie. Giving advice on club selection is also not allowed.",
            example: "Example: Players have been penalized on Tour simply for looking into another player's bag and moving a towel to see what iron they pulled."
        },
        {
            question: "You are playing a stroke play competition. To save time, you hit your shot while the player farthest from the hole is deciding what club to use.",
            choices: [
                { text: "You get a 2-stroke penalty for playing out of turn.", scoreChange: 2 },
                { text: "You get a 1-stroke penalty.", scoreChange: 1 },
                { text: "No penalty. 'Ready Golf' is encouraged.", scoreChange: 0, correct: true }
            ],
            explanation: "You are both allowed and encouraged to play out of turn in a safe and responsible way to save time, which is known as Ready Golf.",
            example: "Example: Ready Golf is highly promoted in amateur and professional formats to improve pace of play and reduce round times."
        },
        {
            question: "Your ball comes to rest right on the white line marking out of bounds. Half the ball is in bounds, half is out of bounds.",
            choices: [
                { text: "The ball is Out of Bounds.", scoreChange: 2 },
                { text: "The ball is In Bounds.", scoreChange: 0, correct: true },
                { text: "You get free relief away from the line.", scoreChange: 1 }
            ],
            explanation: "A ball is out of bounds only when all of it is outside the boundary edge of the course. If any part touches inside the edge, it is in bounds.",
            example: "Example: Tour players often have rulings where officials bring strings to measure if even a millimeter of the ball is over the white line."
        },
        {
            question: "Your ball lands on the putting green, but there is sand and loose soil between your ball and the hole.",
            choices: [
                { text: "You cannot touch the sand.", scoreChange: 2 },
                { text: "You may remove sand on the putting green without penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke to brush it away.", scoreChange: 1 }
            ],
            explanation: "You may remove sand and loose soil on the putting green. Note that sand is not a loose impediment elsewhere on the course.",
            example: "Example: Pros frequently brush away sand that has splashed out of a bunker onto the green before putting."
        },
        {
            question: "You intend to strike the ball, but completely miss it on your downswing.",
            choices: [
                { text: "It counts as a stroke.", scoreChange: 0, correct: true },
                { text: "No penalty, try again.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "If you intend to strike the ball but you miss it, that still counts as a stroke. A stroke is made by fairly striking at a ball with the head of a club.",
            example: "Example: The famous 'whiff' counts on the scorecard, a painful lesson for many beginners."
        },
        {
            question: "Your tee shot splashes directly into a water hazard. What can you do?",
            choices: [
                { text: "Play it as it lies, or take penalty relief.", scoreChange: 0, correct: true },
                { text: "You must drop a ball, you cannot play out of water.", scoreChange: 1 },
                { text: "Drop a ball without penalty.", scoreChange: 2 }
            ],
            explanation: "When a ball lands in a water hazard, players can play it as it lies, or take a one-stroke penalty to drop near the hazard or back-on-the-line.",
            example: "Example: Bill Haas famously played an incredibly difficult shot directly out of the water at the Tour Championship to win the FedEx Cup."
        },
        {
            question: "You hit your ball, and it accidentally bounces off a tree and hits you in the leg.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "2 penalty strokes.", scoreChange: 2 },
                { text: "No penalty, play it as it lies.", scoreChange: 0, correct: true }
            ],
            explanation: "If a ball in motion accidentally hits any person or outside influence, including the player or their equipment, there is no penalty.",
            example: "Example: At the PGA Championship, players have had balls ricochet off grandstands and hit them with zero penalty under the modernized rules."
        },
        {
            question: "Your ball is in the fairway, but you find it resting in a deep divot.",
            choices: [
                { text: "You may take free relief.", scoreChange: 2 },
                { text: "You must play the ball as it lies.", scoreChange: 0, correct: true },
                { text: "You may replace the divot under the ball.", scoreChange: 1 }
            ],
            explanation: "A central principle is to play the course as you find it and play your ball as it lies. Divots are not Ground Under Repair unless marked by the Committee.",
            example: "Example: Tour players frequently express frustration when a perfect 300-yard drive ends up in a fresh divot in the middle of the fairway."
        },
        {
            question: "You find your ball on the fairway, but it is entirely covered by a leaf. Can you remove the leaf?",
            choices: [
                { text: "Yes, without penalty, as long as the ball doesn't move.", scoreChange: 0, correct: true },
                { text: "No, loose impediments cannot be moved in the general area.", scoreChange: 2 },
                { text: "Yes, but it costs 1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "You may remove a loose impediment anywhere on or off the course without penalty. However, if removing it causes the ball to move, you get a penalty.",
            example: "Example: Players meticulously move leaves away from their ball in the autumn months to ensure clean contact."
        },
        {
            question: "You want to identify your ball in the thick rough, but it is covered in mud.",
            choices: [
                { text: "You may lift it and clean it completely.", scoreChange: 1 },
                { text: "You may not lift the ball at all.", scoreChange: 2 },
                { text: "You may mark, lift, and clean it only as much as needed to identify it.", scoreChange: 0, correct: true }
            ],
            explanation: "You may lift a ball to identify it, but you must mark its spot first and must not clean it more than needed to identify it.",
            example: "Example: Tour players will carefully lift a muddy ball with two fingers just to see their personal sharpie mark, taking care not to rub it clean."
        },
        {
            question: "You declare your ball unplayable in a dense bush.",
            choices: [
                { text: "You can take free relief.", scoreChange: 2 },
                { text: "You can take relief and accept a one-stroke penalty.", scoreChange: 0, correct: true },
                { text: "You must attempt to hit it.", scoreChange: 1 }
            ],
            explanation: "Players can take relief for an unplayable ball and accept penalty strokes if they think it's best for their game. You do not have to state a reason.",
            example: "Example: Jordan Spieth famously took an unplayable drop on the driving range at the 2017 Open Championship to save his round."
        },
        {
            question: "You finish your round of stroke play. Who must sign your scorecard before turning it in?",
            choices: [
                { text: "Just you.", scoreChange: 1 },
                { text: "Just your marker.", scoreChange: 2 },
                { text: "You and your marker.", scoreChange: 0, correct: true }
            ],
            explanation: "In stroke play, your score card is signed by you and your marker. Failure to certify the hole scores results in disqualification.",
            example: "Example: Players spend several minutes in the scoring tent after a round meticulously checking scores and signatures."
        },
        {
            question: "While searching for your ball in the thick rough, you accidentally kick it and it moves. What is the ruling?",
            choices: [
                { text: "1 penalty stroke, play as it lies.", scoreChange: 1 },
                { text: "No penalty, but you must replace the ball.", scoreChange: 0, correct: true },
                { text: "No penalty, play as it lies.", scoreChange: 2 }
            ],
            explanation: "If you move your ball accidentally while searching for it, there is no penalty, but the ball must be replaced on its original spot.",
            example: "Example: If you are searching in deep grass and step on your ball, simply put it back where it was without penalty."
        },
        {
            question: "Your ball is on the putting green, and you notice several spike marks on your line of putt. Are you allowed to repair them?",
            choices: [
                { text: "Yes, without penalty.", scoreChange: 0, correct: true },
                { text: "Yes, but only for a 1-stroke penalty.", scoreChange: 1 },
                { text: "No, you must play the course as you find it.", scoreChange: 2 }
            ],
            explanation: "If your ball has come to rest on the putting green and there are spike marks, you are allowed to repair damage on the putting green without penalty.",
            example: "Example: This rule was updated prior to 2019 to make the game fairer, so you no longer have to putt over someone else's spike marks."
        },
        {
            question: "You are chipping from near the green and accidentally hit the ball more than once during your single swing. What is the ruling?",
            choices: [
                { text: "It counts as two strokes.", scoreChange: 1 },
                { text: "It counts as one stroke, plus a 1-stroke penalty.", scoreChange: 2 },
                { text: "It counts as one stroke, with no additional penalty.", scoreChange: 0, correct: true }
            ],
            explanation: "If your club strikes the ball more than once in making a stroke, it only counts as one stroke with no penalty.",
            example: "Example: Previously a penalty, the rules were modernized so that an accidental double-hit no longer costs you an extra stroke."
        },
        {
            question: "You putt from 10 feet away on the putting green and decide to leave the unattended flagstick in the hole. Your putt strikes the flagstick and bounces away.",
            choices: [
                { text: "You get a 2-stroke penalty.", scoreChange: 2 },
                { text: "You get a 1-stroke penalty.", scoreChange: 1 },
                { text: "No penalty, play the ball as it lies.", scoreChange: 0, correct: true }
            ],
            explanation: "There is normally no penalty if your ball in motion hits an unattended flagstick in the hole. The ball must be played as it lies.",
            example: "Example: Bryson DeChambeau and Matt Fitzpatrick frequently leave the flagstick in on long putts for a strategic backstop."
        },
        {
            question: "Your ball comes to rest on a paved cart path and you decide to take free relief. From what height must you drop your golf ball?",
            choices: [
                { text: "From shoulder height.", scoreChange: 2 },
                { text: "From knee height.", scoreChange: 0, correct: true },
                { text: "Place it directly on the ground.", scoreChange: 1 }
            ],
            explanation: "When dropping a ball, you must hold the ball at knee height and let go of the ball so that it falls straight down.",
            example: "Example: It is no longer legal to drop the ball from shoulder height; it must be dropped from knee height."
        },
        {
            question: "Your ball lands in a fairway bunker. Are you allowed to touch the sand with your club while taking a practice swing?",
            choices: [
                { text: "Yes, as long as you don't hit the ball.", scoreChange: 2 },
                { text: "Yes, but only in the backswing.", scoreChange: 1 },
                { text: "No, this incurs the General Penalty (2 strokes).", scoreChange: 0, correct: true }
            ],
            explanation: "When your ball is in a bunker you are not allowed to touch the sand in the bunker in your backswing for a practice stroke.",
            example: "Example: You are allowed to take practice swings, but you must hover your club above the sand to avoid a penalty."
        },
        {
            question: "You hit your tee shot and the ball shatters into pieces in mid-air.",
            choices: [
                { text: "No penalty, replay the stroke.", scoreChange: 0, correct: true },
                { text: "It counts as a stroke.", scoreChange: 1 },
                { text: "2 penalty strokes.", scoreChange: 2 }
            ],
            explanation: "If a player's ball breaks into pieces after a stroke, there is no penalty and the stroke does not count. The player must play another ball from where that stroke was made.",
            example: "Example: During a cold morning round, a player's golf ball cracked upon impact, allowing them to legally re-tee a fresh ball without penalty."
        },
        {
            question: "As you take your stance to hit your approach shot, your caddie stands directly behind you on the line of play to help you aim.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty, this is allowed.", scoreChange: 2 },
                { text: "General Penalty (2 strokes).", scoreChange: 0, correct: true }
            ],
            explanation: "A caddie must not deliberately stand on or close to an extension of the line of play behind the ball when the player begins taking a stance. Doing so results in the General Penalty.",
            example: "Example: Tour players must be careful to ensure their caddies step aside before they officially set their feet for the stroke."
        },
        {
            question: "Your ball comes to rest in a bunker right against a rake left by the previous group.",
            choices: [
                { text: "You must play it as it lies.", scoreChange: 2 },
                { text: "You may remove the rake without penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke to remove the rake.", scoreChange: 1 }
            ],
            explanation: "A rake is a movable obstruction, and you may remove a movable obstruction anywhere on or off the course without penalty.",
            example: "Example: If the ball moves when you remove the rake, you simply replace it on its original spot without penalty."
        },
        {
            question: "Your ball lands on a paved cart path.",
            choices: [
                { text: "You must play it as it lies.", scoreChange: 2 },
                { text: "You are allowed free relief.", scoreChange: 0, correct: true },
                { text: "You may take relief for a 1-stroke penalty.", scoreChange: 1 }
            ],
            explanation: "Artificially surfaced roads and paths are immovable obstructions, which are abnormal course conditions. You are allowed free relief when your ball is in the general area and there is interference by an abnormal course condition.",
            example: "Example: Players frequently take free drops off paved paths to avoid damaging their clubs."
        },
        {
            question: "Your ball lands near an alligator or a venomous snake.",
            choices: [
                { text: "You must play it as it lies.", scoreChange: 2 },
                { text: "You may take free relief.", scoreChange: 0, correct: true },
                { text: "You may declare it unplayable for a 1-stroke penalty.", scoreChange: 1 }
            ],
            explanation: "A player may take free relief from a dangerous animal condition when a dangerous animal near a ball could cause serious physical injury to the player.",
            example: "Example: Safety first! You do not have to risk your life to play your ball as it lies if an alligator is nearby."
        },
        {
            question: "You use a laser rangefinder during a tournament that measures both distance and elevation changes.",
            choices: [
                { text: "This is fully allowed.", scoreChange: 2 },
                { text: "Distance is allowed, but measuring elevation (slope) is a penalty.", scoreChange: 0, correct: true },
                { text: "Rangefinders are completely banned.", scoreChange: 1 }
            ],
            explanation: "Using an artificial object to get distance information is allowed, but measuring elevation changes (slope) is not allowed and results in a penalty.",
            example: "Example: Many modern rangefinders have a 'slope' toggle switch that must be visibly turned off during tournament play."
        },
        {
            question: "You decide to putt 'croquet style', straddling the line of play with one foot on each side.",
            choices: [
                { text: "This is completely legal.", scoreChange: 2 },
                { text: "This incurs a 1-stroke penalty.", scoreChange: 1 },
                { text: "This incurs the General Penalty (2 strokes).", scoreChange: 0, correct: true }
            ],
            explanation: "A player must not make a stroke from a stance with a foot deliberately placed on each side of, or with either foot deliberately touching, the line of play or an extension of that line behind the ball.",
            example: "Example: Sam Snead famously putted croquet style, which led the USGA to ban the method to preserve traditional putting strokes."
        },
        {
            question: "In stroke play, you accidentally sign your scorecard showing a 4 on a hole where you actually scored a 5.",
            choices: [
                { text: "The score is adjusted, no penalty.", scoreChange: 2 },
                { text: "You are disqualified.", scoreChange: 0, correct: true },
                { text: "You receive a 2-stroke penalty.", scoreChange: 1 }
            ],
            explanation: "If you return a scorecard with a score for any hole lower than you actually took, you are disqualified.",
            example: "Example: Roberto De Vicenzo famously missed out on a playoff at the 1968 Masters because he signed a scorecard that had a 4 instead of his actual 3."
        },
        {
            question: "After a bad shot, you slam your club against a tree and bend the shaft.",
            choices: [
                { text: "You may replace the club with a spare.", scoreChange: 2 },
                { text: "You may continue to use it, but cannot replace it.", scoreChange: 0, correct: true },
                { text: "You cannot use the club for the rest of the round.", scoreChange: 1 }
            ],
            explanation: "If a player damages a club during a round, they may continue to make strokes with it, but they must not replace it if the damage was caused by abuse.",
            example: "Example: If a player bends their putter in anger, they will have to putt with a wedge or another club for the remainder of the round."
        },
        {
            question: "Your ball comes to rest on the green. Before you can mark it, a strong gust of wind blows it into the hole.",
            choices: [
                { text: "You must replace the ball.", scoreChange: 2 },
                { text: "You have holed out with your previous stroke.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke and replace.", scoreChange: 1 }
            ],
            explanation: "If natural forces cause a ball at rest to move, there is no penalty and the ball must be played from its new spot. Since it blew into the hole, you have holed out with your previous stroke.",
            example: "Example: Sometimes gravity or wind is your best friend on fast greens, officially holing your putt for you without penalty."
        },
        {
            question: "Your ball is in the rough. You move a loose twig next to it, which causes your ball to roll away.",
            choices: [
                { text: "Play it as it lies, no penalty.", scoreChange: 2 },
                { text: "1 penalty stroke, replace the ball.", scoreChange: 0, correct: true },
                { text: "2 penalty strokes, replace the ball.", scoreChange: 1 }
            ],
            explanation: "If removing a loose impediment causes your ball to move, you get one penalty stroke, and the ball must be replaced on its original spot.",
            example: "Example: Players must be extremely careful when removing leaves and twigs in the rough so they do not disturb their ball."
        },
        {
            question: "After a heavy rainstorm, your ball rests in a large puddle in the middle of the fairway.",
            choices: [
                { text: "You must play it as it lies.", scoreChange: 2 },
                { text: "You may take free relief.", scoreChange: 0, correct: true },
                { text: "You may take relief for a 1-stroke penalty.", scoreChange: 1 }
            ],
            explanation: "Temporary water is an abnormal course condition. You may take free relief by dropping a ball in the nearest relief area.",
            example: "Example: You are not forced to hit out of standing water; the rules provide free relief to find a dry stance."
        },
        {
            question: "It is raining heavily, so you have your friend hold an umbrella over your head while you make your stroke.",
            choices: [
                { text: "This is completely allowed.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "General Penalty (2 strokes).", scoreChange: 0, correct: true }
            ],
            explanation: "A player must not make a stroke while getting physical help from any other person, or with any person deliberately positioned to give protection from the elements.",
            example: "Example: Your caddie or friend must step away with the umbrella before you actually hit the ball."
        },
        {
            question: "While marking your ball on the green, you accidentally drop your coin on the ball, causing it to move.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty, you must replace the ball.", scoreChange: 0, correct: true },
                { text: "Play it as it lies.", scoreChange: 2 }
            ],
            explanation: "There is no penalty if you accidentally cause your ball or ball-marker to move on the putting green. The ball must simply be replaced.",
            example: "Example: Fumbling a slippery coin on the putting green is forgiven under the rules, allowing a free replacement."
        },
        {
            question: "Your ball is in a bunker. Before playing, you rake footprints on the other side of the bunker.",
            choices: [
                { text: "General Penalty.", scoreChange: 2 },
                { text: "No penalty, you may care for the course.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "You may smooth sand in a bunker to care for the course, as long as it does not improve the conditions affecting your stroke.",
            example: "Example: Cleaning up someone else's mess far away from your ball is considered good etiquette and is not penalized."
        },
        {
            question: "A white stake marking Out of Bounds is right in the middle of your backswing. You pull it out of the ground.",
            choices: [
                { text: "Free relief allowed.", scoreChange: 2 },
                { text: "No penalty as long as you put it back.", scoreChange: 1 },
                { text: "General Penalty.", scoreChange: 0, correct: true }
            ],
            explanation: "Boundary objects (like out of bounds stakes) must not be moved, bent, or broken to improve the conditions affecting the stroke.",
            example: "Example: Unlike red or yellow stakes, white OB stakes are fixed boundary objects and cannot be touched."
        },
        {
            question: "You find a muddy ball in the rough. You lift it and clean it completely to see if it's yours.",
            choices: [
                { text: "No penalty.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 1 }
            ],
            explanation: "When lifting a ball to identify it, cleaning is allowed only as much as needed to identify it. Cleaning it completely results in a penalty.",
            example: "Example: Only wipe a tiny spot of mud off the ball to reveal your personal identification mark."
        },
        {
            question: "Your ball is just off the green on the fringe. There is sand in your line of play, so you brush it away.",
            choices: [
                { text: "No penalty.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "General Penalty.", scoreChange: 0, correct: true }
            ],
            explanation: "Sand and loose soil are not loose impediments. You may remove sand and loose soil on the putting green, but doing so elsewhere to improve your line of play is a penalty.",
            example: "Example: You must resist the urge to sweep sand off the fringe, even if it was splashed there from a bunker."
        },
        {
            question: "Your ball lands on a divot hole in the fairway. You find the loose piece of turf and put it back in the hole before hitting.",
            choices: [
                { text: "No penalty, this is good etiquette.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "General Penalty.", scoreChange: 0, correct: true }
            ],
            explanation: "You must not improve the conditions affecting your stroke by replacing divots in a divot hole.",
            example: "Example: You must play your bad lie from the divot hole without trying to patch the turf first."
        },
        {
            question: "Your tee shot splashes right into the middle of a lake. You declare a provisional ball and hit another one.",
            choices: [
                { text: "Legal, it is a provisional ball.", scoreChange: 2 },
                { text: "It becomes the ball in play under Stroke-and-Distance penalty.", scoreChange: 0, correct: true },
                { text: "Loss of hole.", scoreChange: 1 }
            ],
            explanation: "A provisional ball may only be played if a ball might be lost outside a penalty area or out of bounds. You cannot play a provisional for a ball known to be in a penalty area.",
            example: "Example: If you hit it directly into the middle of a massive pond, you cannot hit a 'provisional'."
        },
        {
            question: "You ask another player in your group which direction they think the wind is blowing.",
            choices: [
                { text: "General Penalty.", scoreChange: 2 },
                { text: "No penalty, this is public information.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Advice does not include public information such as wind direction or the location of hazards. You may ask anyone for this information without penalty.",
            example: "Example: Discussing yardages to the pin or where the wind is coming from is entirely legal conversation."
        },
        {
            question: "In match play, your opponent accidentally kicks your ball while looking for their own.",
            choices: [
                { text: "Loss of hole for opponent.", scoreChange: 2 },
                { text: "1 penalty stroke for opponent.", scoreChange: 1 },
                { text: "No penalty, replace the ball.", scoreChange: 0, correct: true }
            ],
            explanation: "If an opponent accidentally moves your ball in match play while searching for it, there is no penalty, but the ball must be replaced.",
            example: "Example: Accidental kicks during a search do not incur penalties to encourage players to help each other look."
        },
        {
            question: "In stroke play, you accidentally step on another player's ball in the rough.",
            choices: [
                { text: "General Penalty.", scoreChange: 2 },
                { text: "No penalty, replace the ball.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "If a ball is accidentally moved by another player in stroke play, there is no penalty, and the ball must be replaced.",
            example: "Example: The rules forgive players for accidentally moving a fellow competitor's ball during a search."
        },
        {
            question: "In a stroke play competition, your playing partner misses a putt and is 2 inches away. You tell them 'that's good, pick it up'.",
            choices: [
                { text: "This is fine, it speeds up play.", scoreChange: 2 },
                { text: "Not allowed, they must hole out.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Concessions only exist in match play. In stroke play, every player must hole out on every hole, or they will be disqualified.",
            example: "Example: You cannot give 'gimmes' in official stroke play tournaments, no matter how close the ball is to the hole."
        },
        {
            question: "Your ball is in a red penalty area. As you take your stance, you rest your clubhead on the ground.",
            choices: [
                { text: "General Penalty.", scoreChange: 2 },
                { text: "No penalty, this is allowed.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Players are allowed to play the ball as it lies in a penalty area without penalty, which includes the ability to ground the club or move loose impediments.",
            example: "Example: The modernization of the rules allows you to ground your club in water hazards to simplify the game."
        },
        {
            question: "After finishing the 4th hole in a stroke play tournament, you drop a ball and try the putt again.",
            choices: [
                { text: "General Penalty.", scoreChange: 2 },
                { text: "No penalty, this is allowed.", scoreChange: 0, correct: true },
                { text: "Disqualification.", scoreChange: 1 }
            ],
            explanation: "You may practice putting or chipping on or near the putting green of the hole just completed, even during stroke play.",
            example: "Example: Unless a specific Local Rule bans it, you can hit a quick practice putt on the green you just finished."
        },
        {
            question: "You are closer to the hole than your playing partner, but they are still deciding on a club, so you quickly hit your shot.",
            choices: [
                { text: "2 penalty strokes.", scoreChange: 2 },
                { text: "No penalty, 'Ready Golf' is encouraged.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Players are allowed and encouraged to play out of turn in a safe and responsible way for convenience or to save time, known as 'Ready Golf'.",
            example: "Example: Ready Golf has been officially endorsed to combat slow play on courses worldwide."
        },
        {
            question: "Your ball is sitting directly on the white line marking out of bounds, with half the ball out and half the ball in.",
            choices: [
                { text: "It is Out of Bounds.", scoreChange: 2 },
                { text: "It is In Bounds.", scoreChange: 0, correct: true },
                { text: "Free relief allowed.", scoreChange: 1 }
            ],
            explanation: "A ball is out of bounds only when all of it is outside the boundary edge of the course. If any part is touching the course, it is in bounds.",
            example: "Example: Even if 99% of the ball is out of bounds, if a tiny fraction touches the white line, you are safe."
        },
        {
            question: "You take a mighty swing at the ball with the intention of hitting it, but you miss it completely.",
            choices: [
                { text: "No penalty, try again.", scoreChange: 2 },
                { text: "It counts as a stroke.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "A stroke is made by fairly striking at a ball with the head of a club. If you intend to strike the ball but miss, it still counts as a stroke.",
            example: "Example: The famous 'whiff' is an embarrassing but officially counted stroke on your scorecard."
        }
    ],

    "pro": [
        {
            question: "During a round, a player slams their driver into the ground in anger, snapping the shaft. Can they replace it?",
            choices: [
                { text: "Yes, they may replace any broken club.", scoreChange: 2 },
                { text: "No, because the club was damaged through abuse.", scoreChange: 0, correct: true },
                { text: "Yes, but they incur a 2-stroke penalty.", scoreChange: 1 }
            ],
            explanation: "The Rule allows a player to replace a club that is damaged during a round, provided the player did not damage it through abuse. If caused by abuse, they cannot replace it.",
            example: "Example: If a Tour Pro snaps their putter over their knee in frustration, they will have to putt with their wedge for the remainder of the round."
        },
        {
            question: "You take penalty relief and drop your ball in the relief area. Seconds later, a gust of wind blows it out of bounds.",
            choices: [
                { text: "Play a new ball under penalty of Stroke and Distance.", scoreChange: 2 },
                { text: "Replace the ball on the exact spot it had come to rest without penalty.", scoreChange: 0, correct: true },
                { text: "Re-drop the ball for 1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "A new exception in 2023 provides that a ball at rest must be replaced if it moves to another area of the course or comes to rest out of bounds after being dropped, placed or replaced.",
            example: "Example: This rule change protects players from being unfairly penalized by gravity or wind immediately after taking a legal drop."
        },
        {
            question: "In stroke play, a player returns their signed scorecard but forgets to write their handicap on it. What is the penalty?",
            choices: [
                { text: "No penalty. The Committee ensures handicap accuracy.", scoreChange: 0, correct: true },
                { text: "Disqualification from the net-score competition.", scoreChange: 2 },
                { text: "General Penalty (2 strokes).", scoreChange: 1 }
            ],
            explanation: "Players are no longer penalized for failing to put their handicap on their scorecard in stroke play. The committee will be responsible for ensuring the accuracy of each player's handicap.",
            example: "Example: Prior to 2023, failing to write a handicap on a scorecard was a frequent cause of heartbreaking disqualifications."
        },
        {
            question: "You declare your ball unplayable and decide to take back-on-the-line relief. What is the correct dropping procedure?",
            choices: [
                { text: "Drop the ball on the line, and it must come to rest within one club-length.", scoreChange: 0, correct: true },
                { text: "Drop the ball within one club-length of a spot on the line.", scoreChange: 1 },
                { text: "Drop the ball directly on the line, and it must stay exactly on the line.", scoreChange: 2 }
            ],
            explanation: "The back-on-the-line relief procedure has been simplified so that the player now drops their ball on the line, and the ball must come to rest within one club-length of where it is dropped.",
            example: "Example: This simplification means Tour Pros no longer have to guess the exact reference point on the line."
        },
        {
            question: "A player uses a laser rangefinder that displays 'plays like' distance adjusted for slope. They use this feature on the 1st hole.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "No penalty, as long as it is turned off later.", scoreChange: 1 },
                { text: "General Penalty on the first breach, DQ for a second.", scoreChange: 0, correct: true }
            ],
            explanation: "Using a device to measure elevation changes is not allowed. The penalty for the first breach of using equipment in an abnormal way is the General Penalty.",
            example: "Example: Many rangefinders have a 'slope' toggle switch that must be visibly turned off during tournament play."
        },
        {
            question: "Your ball is buried under the lip of a bunker. You declare it unplayable and drop it completely OUTSIDE the bunker going back-on-the-line.",
            choices: [
                { text: "This is an extra relief option that costs 2 penalty strokes.", scoreChange: 0, correct: true },
                { text: "This costs 1 penalty stroke.", scoreChange: 1 },
                { text: "You cannot drop outside a bunker.", scoreChange: 2 }
            ],
            explanation: "As an extra relief option when your ball is in a bunker, for a total of two penalty strokes you may play from outside the bunker using the back-on-a-line procedure.",
            example: "Example: Rory McIlroy utilized this 2-stroke unplayable bunker relief to escape a brutal lie in a deep pot bunker."
        },
        {
            question: "Which of the following is an option for Red Penalty Areas that is NOT allowed for Yellow Penalty Areas?",
            choices: [
                { text: "Back-on-the-line relief.", scoreChange: 1 },
                { text: "Lateral relief (dropping within two club-lengths).", scoreChange: 0, correct: true },
                { text: "Stroke-and-distance relief.", scoreChange: 2 }
            ],
            explanation: "If your ball crossed a red penalty area, you have the extra option to take lateral relief. Yellow penalty areas only allow back-on-the-line or stroke-and-distance relief.",
            example: "Example: At the Masters on the 12th hole (yellow area), players in Rae's Creek must use the drop zone or go back-on-the-line; they cannot take lateral drops."
        },
        {
            question: "You putt from the fringe, and a spectator deliberately stops your ball from rolling into a bunker.",
            choices: [
                { text: "Play it as it lies from the spectator's foot.", scoreChange: 2 },
                { text: "The stroke counts, and you must place the ball where it would have rested.", scoreChange: 0, correct: true },
                { text: "Cancel the stroke, 1 penalty stroke, and replay.", scoreChange: 1 }
            ],
            explanation: "If a ball in motion is deliberately deflected or stopped by a person, the stroke counts and the player must place the ball on the estimated spot where it would have come to rest.",
            example: "Example: If a fan stops a ball from rolling into a lake, a rules official will determine exactly where it would have ended up."
        },
        {
            question: "In stroke play, you putt your ball from the green and it strikes a competitor's ball which was at rest on the green.",
            choices: [
                { text: "You incur the General Penalty (2 strokes).", scoreChange: 0, correct: true },
                { text: "Both players incur a 2-stroke penalty.", scoreChange: 1 },
                { text: "No penalty, but the competitor's ball must be replaced.", scoreChange: 2 }
            ],
            explanation: "On the putting green, if you putt and your ball strikes your fellow-competitor's ball that is also on the green, there is a General Penalty (2 strokes).",
            example: "Example: This strict rule prevents players from leaving balls near the hole to act as a 'backstop' for their competitors."
        },
        {
            question: "You oversleep and arrive at the 1st tee exactly 3 minutes after your assigned starting time.",
            choices: [
                { text: "You get the General Penalty (2 strokes) applied to the first hole.", scoreChange: 0, correct: true },
                { text: "You are disqualified.", scoreChange: 2 },
                { text: "No penalty as long as your group hasn't left the tee.", scoreChange: 1 }
            ],
            explanation: "Arriving late but within five minutes of your starting time usually carries the General Penalty (2 strokes) rather than immediate disqualification.",
            example: "Example: Rory McIlroy famously nearly missed his Ryder Cup tee time in 2012, arriving with just minutes to spare."
        },
        {
            question: "Your ball is just off the green on the fringe. You use your towel to brush away sand on your line of play.",
            choices: [
                { text: "No penalty.", scoreChange: 2 },
                { text: "General Penalty (2 strokes).", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Sand and loose soil are not loose impediments. You may remove sand on the putting green, but doing so elsewhere to improve your line of play incurs the General Penalty.",
            example: "Example: Tour Pros must resist the urge to sweep sand off the fringe, even if it was splashed there from a bunker."
        },
        {
            question: "In match play, you concede your opponent's 3-foot putt. They carelessly putt it anyway and miss.",
            choices: [
                { text: "Opponent loses the hole.", scoreChange: 2 },
                { text: "The concession is final. The hole is completed.", scoreChange: 0, correct: true },
                { text: "Opponent must count the missed stroke.", scoreChange: 1 }
            ],
            explanation: "A concession made any time before the opponent's next stroke is made is final and cannot be declined or withdrawn.",
            example: "Example: Jack Nicklaus's famous concession to Tony Jacklin at the 1969 Ryder Cup ended the match instantly."
        },
        {
            question: "You declare your ball unplayable in the general area and take lateral relief (dropping within 2 club-lengths).",
            choices: [
                { text: "This costs 1 penalty stroke.", scoreChange: 0, correct: true },
                { text: "This costs 2 penalty strokes.", scoreChange: 2 },
                { text: "You get free relief.", scoreChange: 1 }
            ],
            explanation: "If your ball is unplayable in the general area, you may take lateral relief within two club-lengths for one penalty stroke.",
            example: "Example: Taking an unplayable lie drop from a dense bush for 1 penalty stroke is a smart course management tactic."
        },
        {
            question: "Your ball rests against the flagstick, with part of the ball below the surface, but it hasn't fallen to the bottom.",
            choices: [
                { text: "Must remove flagstick. If it pops out, it's not holed.", scoreChange: 1 },
                { text: "The ball is treated as holed.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke, and you must tap it in.", scoreChange: 2 }
            ],
            explanation: "If a ball rests against the flagstick and any part of the ball is below the surface of the putting green, the ball is treated as holed.",
            example: "Example: This rule change alleviated the anxiety of carefully wiggling the pin out to ensure the ball drops."
        },
        {
            question: "Your tee shot splashes directly into the middle of a lake. You declare a provisional ball and re-tee.",
            choices: [
                { text: "This is a legal provisional ball.", scoreChange: 2 },
                { text: "The new ball becomes the ball in play under Stroke-and-Distance penalty.", scoreChange: 0, correct: true },
                { text: "Loss of hole.", scoreChange: 1 }
            ],
            explanation: "You are not allowed to play a provisional ball if the only possible place your original ball could be lost is in a penalty area. The new ball becomes the ball in play.",
            example: "Example: If you hit it directly into the middle of a massive pond, you cannot hit a 'provisional'."
        },
        {
            question: "While searching for your ball in the thick rough, you accidentally step on it and bury it.",
            choices: [
                { text: "1 penalty stroke, play it as it lies.", scoreChange: 1 },
                { text: "No penalty, but you must replace the ball on its original spot.", scoreChange: 0, correct: true },
                { text: "General penalty, replace the ball.", scoreChange: 2 }
            ],
            explanation: "If you accidentally move your ball while searching for it, there is no penalty, but the ball must be replaced on its original spot.",
            example: "Example: Tour Pros and the gallery frequently step on balls during frantic searches in deep grass; simply put it back."
        },
        {
            question: "In stroke play, you and a competitor agree to ignore a 1-stroke penalty because the rule feels unfair.",
            choices: [
                { text: "1 penalty stroke added to both players.", scoreChange: 1 },
                { text: "General penalty to both players.", scoreChange: 2 },
                { text: "Both players are disqualified.", scoreChange: 0, correct: true }
            ],
            explanation: "If you and your opponent or fellow competitor deliberately agree to ignore a breach or penalty, you are both disqualified.",
            example: "Example: Protecting the field is paramount in stroke play. Collusion to avoid penalties strips the integrity of the tournament."
        },
        {
            question: "Before your stroke from the fairway, you press down a divot that had been replaced in your swing path.",
            choices: [
                { text: "No penalty.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "General Penalty.", scoreChange: 0, correct: true }
            ],
            explanation: "You must not alter the surface of the ground to improve the conditions affecting your stroke by pressing down replaced divots, which incurs the General Penalty.",
            example: "Example: You must play your shot without trying to patch or remove replaced turf in your swing path."
        },
        {
            question: "Your ball is in a fairway bunker. During a practice swing, you accidentally touch the sand with your clubhead.",
            choices: [
                { text: "General Penalty (2 strokes).", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty.", scoreChange: 2 }
            ],
            explanation: "When your ball is in a bunker you are not allowed to touch the sand in the bunker during a practice stroke, which results in the General Penalty.",
            example: "Example: Pros must hover their club above the sand during practice swings to avoid a severe penalty."
        },
        {
            question: "You are putting. Your caddie touches the putting green to point out your target line before you stroke.",
            choices: [
                { text: "General Penalty.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty, this is allowed.", scoreChange: 0, correct: true }
            ],
            explanation: "A caddie may point out your target line before the stroke is made and may touch the putting green to do so.",
            example: "Example: The caddie must move away and not stand on the line of play while the stroke is actually being made."
        },
        {
            question: "In match play, you play out of turn from the teeing area.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "General Penalty.", scoreChange: 2 },
                { text: "No penalty, but your opponent may cancel your stroke.", scoreChange: 0, correct: true }
            ],
            explanation: "If you play out of turn in match play, your opponent may cancel your stroke and require you to replay it in the correct order.",
            example: "Example: An opponent might let a terrible out-of-turn shot stand, but force you to replay a perfect drive."
        },
        {
            question: "A white stake marking Out of Bounds interferes with your backswing. You pull it out of the ground.",
            choices: [
                { text: "General Penalty.", scoreChange: 0, correct: true },
                { text: "No penalty if replaced.", scoreChange: 1 },
                { text: "Free relief allowed.", scoreChange: 2 }
            ],
            explanation: "Boundary objects like white stakes defining out of bounds must not be moved to improve your conditions, incurring the General Penalty.",
            example: "Example: Unlike hazard stakes, out of bounds stakes are treated as fixed and cannot be touched."
        },
        {
            question: "You find a muddy ball in the rough. You lift it and clean it completely to identify it.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 0, correct: true },
                { text: "No penalty.", scoreChange: 2 },
                { text: "General Penalty.", scoreChange: 1 }
            ],
            explanation: "When lifting a ball to identify it, cleaning is allowed only as much as needed to identify it. Cleaning it completely results in a 1-stroke penalty.",
            example: "Example: Only wipe a tiny spot of mud off the ball to reveal your personal identification mark."
        },
        {
            question: "You begin your downswing on the tee. Just before impact, your ball falls off the tee, but you hit it anyway.",
            choices: [
                { text: "Stroke counts, play as it lies.", scoreChange: 0, correct: true },
                { text: "Replay with 1 penalty stroke.", scoreChange: 1 },
                { text: "Cancel stroke, no penalty.", scoreChange: 2 }
            ],
            explanation: "If your ball is falling off the tee and you make a stroke at it while it is moving, the stroke counts and there is no penalty.",
            example: "Example: Pros have incredible reflexes and will sometimes try to stop their swing entirely, but if they connect, the shot counts."
        },
        {
            question: "In stroke play, you hit a shot from the rough and realize it was a stray ball, not yours.",
            choices: [
                { text: "2 penalty strokes, must correct.", scoreChange: 0, correct: true },
                { text: "DQ immediately.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Playing a wrong ball in stroke play results in a two-stroke penalty, and you must correct the mistake by playing the right ball.",
            example: "Example: Failing to correct the mistake of playing a wrong ball before teeing off on the next hole results in disqualification."
        },
        {
            question: "A dog runs onto the fairway, picks up your golf ball, and runs away with it.",
            choices: [
                { text: "Replace ball on original spot, no penalty.", scoreChange: 0, correct: true },
                { text: "Play from where the dog dropped it.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "If an outside influence like an animal moves your ball, there is no penalty and the ball must be replaced on its original spot.",
            example: "Example: Foxes and squirrels stealing golf balls provide great TV moments, and the rules protect the player."
        },
        {
            question: "Your ball comes to rest right on the white line marking Out of Bounds. Half the ball is out, half is in.",
            choices: [
                { text: "Out of Bounds.", scoreChange: 2 },
                { text: "In bounds.", scoreChange: 0, correct: true },
                { text: "Free relief.", scoreChange: 1 }
            ],
            explanation: "A ball is out of bounds only when all of it is outside the boundary edge. If any part touches the course, it is in bounds.",
            example: "Example: Even if 99% of the ball is over the line, if a tiny fraction touches the white paint, you are safe."
        },
        {
            question: "You drop your ball from knee height when taking relief. It hits the ground and rolls 3 club-lengths away.",
            choices: [
                { text: "Play as it lies.", scoreChange: 2 },
                { text: "Place the ball.", scoreChange: 1 },
                { text: "Must re-drop.", scoreChange: 0, correct: true }
            ],
            explanation: "If a dropped ball comes to rest outside the allowed relief area, you must lift it and drop it again.",
            example: "Example: On steep slopes, players often have to re-drop twice, after which they are allowed to place the ball."
        },
        {
            question: "In stroke play, you return a signed scorecard showing a 4 on a hole where you actually scored a 5.",
            choices: [
                { text: "Score adjusted.", scoreChange: 2 },
                { text: "2 penalty strokes.", scoreChange: 1 },
                { text: "DQ.", scoreChange: 0, correct: true }
            ],
            explanation: "If you return a scorecard with a score for any hole lower than you actually took, you are disqualified.",
            example: "Example: Roberto De Vicenzo famously missed out on a playoff at the 1968 Masters because of this exact mistake."
        },
        {
            question: "You return a scorecard with a lower score because you didn't know you had incurred a penalty stroke.",
            choices: [
                { text: "DQ.", scoreChange: 2 },
                { text: "Score adjusted plus penalty applied.", scoreChange: 0, correct: true },
                { text: "Stands as is.", scoreChange: 1 }
            ],
            explanation: "If a score is lower because of an excluded penalty stroke you didn't know about, you are not disqualified; the actual score plus penalty stands.",
            example: "Example: This rule protects players who unknowingly breached a complex rule from being thrown out of the tournament."
        },
        {
            question: "In match play, you and your opponent mistakenly agree that you won the last hole, and you tee off on the next.",
            choices: [
                { text: "Agreement stands.", scoreChange: 0, correct: true },
                { text: "Must correct score.", scoreChange: 1 },
                { text: "Both DQ.", scoreChange: 2 }
            ],
            explanation: "If you mistakenly agree on a wrong match score and don't correct it before the next stroke, the agreement is conclusive unless you deliberately waived the Rules.",
            example: "Example: Match play puts the onus entirely on the two players to protect their own interests and score."
        },
        {
            question: "You place an alignment rod on the ground to help line up your feet, and leave it there while making your stroke.",
            choices: [
                { text: "General Penalty.", scoreChange: 0, correct: true },
                { text: "No penalty.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Using an alignment device to help align your stance or ball during a stroke is not allowed and incurs the General Penalty.",
            example: "Example: Training aids cannot be used to assist you during the actual execution of a shot."
        },
        {
            question: "During your round, you listen to music through headphones to help establish a smooth swing tempo.",
            choices: [
                { text: "General Penalty.", scoreChange: 0, correct: true },
                { text: "No penalty.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Listening to music or other audio to eliminate distractions or to help with swing tempo is not allowed and incurs the General Penalty.",
            example: "Example: While casual music in the cart is often accepted, using audio specifically to gain a competitive advantage is banned."
        },
        {
            question: "You are unsure what club to hit, so you ask your opponent what club they just used.",
            choices: [
                { text: "No penalty.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "General Penalty.", scoreChange: 0, correct: true }
            ],
            explanation: "During a round, you must not ask anyone for advice other than your caddie, which incurs the General Penalty.",
            example: "Example: You cannot ask for club selection, but asking for public information like yardage is allowed."
        },
        {
            question: "You hit a shot from the rough, it ricochets off a tree and directly hits your own golf bag.",
            choices: [
                { text: "Play as it lies, no penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "2 penalty strokes.", scoreChange: 2 }
            ],
            explanation: "If a ball in motion accidentally hits any person or outside influence, including the player or their equipment, there is no penalty.",
            example: "Example: Players can breathe a sigh of relief if a bad ricochet hits them or their caddie."
        },
        {
            question: "Your approach shot plugs deeply into the soft fairway, embedding in its own pitch mark.",
            choices: [
                { text: "Must play as it lies.", scoreChange: 2 },
                { text: "Free relief.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "A player is allowed free relief for a ball embedded in its own pitch-mark anywhere in the general area.",
            example: "Example: You may lift, clean, and drop your ball within one club-length of the spot right behind where it embedded."
        },
        {
            question: "Your ball is on the fringe, but your stance is physically standing on top of a sprinkler head.",
            choices: [
                { text: "Play as it lies.", scoreChange: 2 },
                { text: "Free relief.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Immovable obstructions are abnormal course conditions, and you are allowed free relief when they interfere with the area of your intended stance.",
            example: "Example: Players frequently take drops off sprinkler heads to avoid slipping or damaging their spikes."
        },
        {
            question: "After a heavy rainstorm, your ball rests on the putting green, but there is temporary water between your ball and the hole.",
            choices: [
                { text: "Free relief.", scoreChange: 0, correct: true },
                { text: "Play as it lies.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Temporary water on the putting green interfering with your line of play allows you to take free relief at the nearest point of complete relief.",
            example: "Example: You do not have to putt through a puddle; you can move your ball to a dry spot that maintains the same distance."
        },
        {
            question: "You hit your tee shot and the ball shatters into pieces in mid-air.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "Stroke counts.", scoreChange: 2 },
                { text: "Stroke cancelled, replay.", scoreChange: 0, correct: true }
            ],
            explanation: "If a player's ball breaks into pieces after a stroke, there is no penalty and the stroke does not count; the player must replay the stroke.",
            example: "Example: During a cold morning round, a cracked golf ball allows you to legally re-tee a fresh ball."
        },
        {
            question: "It starts raining steadily, so you decide to stop play and head to the clubhouse without committee permission.",
            choices: [
                { text: "DQ.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 1 },
                { text: "No penalty.", scoreChange: 2 }
            ],
            explanation: "You must not stop play except for lightning or committee suspension. Stopping for normal rain without permission results in disqualification.",
            example: "Example: Unless you hear the siren or fear for your safety due to lightning, you must play on in the rain."
        },
        {
            question: "You accidentally tee up and hit a ball that does not conform to the Equipment Rules.",
            choices: [
                { text: "DQ.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 1 },
                { text: "1 penalty stroke.", scoreChange: 2 }
            ],
            explanation: "In making each stroke, a player must use a ball that conforms to the requirements in the Equipment Rules. The penalty for breach is disqualification.",
            example: "Example: Make sure your golf balls are on the official conforming lists before tournament play."
        },
        {
            question: "You realize on the 2nd hole that you have 15 clubs in your bag in a stroke play competition.",
            choices: [
                { text: "4 penalty strokes.", scoreChange: 0, correct: true },
                { text: "DQ.", scoreChange: 2 },
                { text: "2 penalty strokes.", scoreChange: 1 }
            ],
            explanation: "The penalty for carrying more than 14 clubs is two strokes for each hole where a breach happened, with a maximum of four penalty strokes per round.",
            example: "Example: You must also immediately declare the excess club out of play."
        },
        {
            question: "In a bunker, you accidentally touch the sand right behind your ball with your clubhead while taking your stance.",
            choices: [
                { text: "General Penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty.", scoreChange: 2 }
            ],
            explanation: "When your ball is in a bunker, touching the sand right in front of or behind your ball with your club is prohibited and incurs the General Penalty.",
            example: "Example: You must hover the clubhead when addressing the ball in a sand trap."
        },
        {
            question: "Your ball comes to rest on the wrong putting green.",
            choices: [
                { text: "Must play as it lies.", scoreChange: 2 },
                { text: "Must take free relief.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "You must take complete relief without penalty from interference by a wrong putting green.",
            example: "Example: Taking a divot out of the wrong putting green is strictly prohibited to protect the course."
        },
        {
            question: "Your ball rests in a hole dug by an animal in the rough.",
            choices: [
                { text: "Play as it lies.", scoreChange: 2 },
                { text: "Free relief.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "An animal hole is an abnormal course condition, and you are allowed free relief when your ball lies in it anywhere in the general area.",
            example: "Example: Gopher holes or burrowing animal tracks give you a free drop."
        },
        {
            question: "To get a better stance in the woods, you deliberately break an attached tree branch.",
            choices: [
                { text: "General Penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty.", scoreChange: 2 }
            ],
            explanation: "You must not improve the conditions affecting your stroke by breaking any growing or attached natural object, which incurs the General Penalty.",
            example: "Example: You must take your stance carefully and accept the interference of the branches."
        },
        {
            question: "You arrive at your ball in the morning and brush away heavy dew on your line of play.",
            choices: [
                { text: "General Penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty.", scoreChange: 2 }
            ],
            explanation: "Dew, frost, and water are not loose impediments and you must not remove them to improve your conditions, incurring the General Penalty.",
            example: "Example: Early morning tee times require players to account for heavy dew on their putts."
        },
        {
            question: "In a 'Maximum Score' stroke play event, you have reached the maximum score limit for the hole but haven't holed out.",
            choices: [
                { text: "Must hole out.", scoreChange: 2 },
                { text: "Pick up and record max score.", scoreChange: 0, correct: true },
                { text: "DQ.", scoreChange: 1 }
            ],
            explanation: "In Maximum Score, if you do not hole out, you get the maximum score. Players are encouraged to pick up when they reach the maximum to help pace of play.",
            example: "Example: If the max is Net Double Bogey, just pick the ball up once you reach it."
        },
        {
            question: "In a Stableford competition, you fail to hole out on a hole.",
            choices: [
                { text: "0 points for the hole.", scoreChange: 0, correct: true },
                { text: "DQ.", scoreChange: 2 },
                { text: "2 penalty strokes.", scoreChange: 1 }
            ],
            explanation: "In Stableford, if you do not hole out correctly under the Rules for any reason, you simply get zero points for the hole and are not disqualified.",
            example: "Example: This format rewards aggressive play and speeds up rounds by eliminating DQs for blow-up holes."
        },
        {
            question: "Your ball is on the putting green. Your caddie lifts the ball to clean it without asking you.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty if reasonable.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 2 }
            ],
            explanation: "A caddie may lift the player's ball on the green if the player has marked it, or if it is reasonable to conclude the player will take relief.",
            example: "Example: A caddie cleaning your golf ball on the green is standard professional practice."
        },
        {
            question: "Your ball lands in a red penalty area. You move a loose twig next to it before playing.",
            choices: [
                { text: "No penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "General Penalty.", scoreChange: 2 }
            ],
            explanation: "You may remove a loose impediment anywhere on or off the course without penalty, including inside a penalty area.",
            example: "Example: Moving loose leaves inside a hazard is now completely legal under the modernized rules."
        },
        {
            question: "You hit a provisional ball. You then find your original ball in bounds within 3 minutes.",
            choices: [
                { text: "Must play provisional.", scoreChange: 2 },
                { text: "Must abandon provisional and play original.", scoreChange: 0, correct: true },
                { text: "Choose either.", scoreChange: 1 }
            ],
            explanation: "If your original ball is found on the course before becoming lost, you must abandon your provisional ball and continue playing your original ball.",
            example: "Example: Even if your provisional is in the middle of the fairway, you must play your original ball from the rough."
        },
        {
            question: "In match play, your opponent accidentally drops their club on your ball marker on the green, moving it.",
            choices: [
                { text: "Loss of hole for opponent.", scoreChange: 2 },
                { text: "1 penalty stroke for opponent.", scoreChange: 1 },
                { text: "No penalty, replace marker.", scoreChange: 0, correct: true }
            ],
            explanation: "If a ball-marker is accidentally moved by an opponent in match play, there is no penalty and the marker must be replaced.",
            example: "Example: Accidental movement of markers on the green is generally forgiven for all players."
        },
        {
            question: "You refuse to tee off because you are arguing with a referee about a previous ruling.",
            choices: [
                { text: "DQ.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 1 },
                { text: "No penalty.", scoreChange: 2 }
            ],
            explanation: "Players must play continuously and at a prompt pace. Refusing to play due to an unreasonable delay results in disqualification.",
            example: "Example: Even if you are furious about a ruling, you must play your shot to keep the pace of play going."
        }
    ],

    "rules-official": [
        {
            question: "In match play, Player A concedes Player B's 3-foot putt. Player B carelessly putts it anyway and misses.",
            choices: [
                { text: "Player B loses the hole.", scoreChange: 2 },
                { text: "The concession is final; Player B has completed the hole.", scoreChange: 0, correct: true },
                { text: "Player B must count the missed stroke.", scoreChange: 1 }
            ],
            explanation: "A concession is final and cannot be declined or withdrawn. Your opponent has then holed out with a score that includes that conceded stroke, and the ball may be removed by anyone.",
            example: "Example: Jack Nicklaus's famous concession to Tony Jacklin at the 1969 Ryder Cup ended the match instantly, regardless of what Jacklin did next."
        },
        {
            question: "In a net-score match, you declare a handicap that is too high, and it affects the number of strokes you give or get. What is the penalty?",
            choices: [
                { text: "Disqualification.", scoreChange: 0, correct: true },
                { text: "Loss of hole.", scoreChange: 2 },
                { text: "General Penalty (2 strokes).", scoreChange: 1 }
            ],
            explanation: "If a player declares a wrong handicap that is too high and does not correct the mistake before the opponent makes their next stroke, the player is disqualified if this affects the number of strokes the player gives or gets.",
            example: "Example: In amateur club championships, declaring a 12 handicap when you are actually a 10 is grounds for immediate removal if you get extra strokes."
        },
        {
            question: "During a match, your opponent asks how many strokes you've taken. You accidentally give the wrong number but correct the mistake before your opponent makes their next stroke.",
            choices: [
                { text: "Loss of hole.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty.", scoreChange: 0, correct: true }
            ],
            explanation: "The player gets the general penalty (loss of hole) if they give the opponent the wrong number of strokes taken, unless the player corrects that mistake before the opponent makes another stroke or takes a similar action.",
            example: "Example: If you say 'I lie 3' but realize you lie 4, you must correct yourself before your opponent hits their approach shot."
        },
        {
            question: "In match play, you incur a penalty stroke but fail to tell your opponent. However, your opponent was standing right next to you and clearly saw you take the penalty drop.",
            choices: [
                { text: "Loss of hole.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty.", scoreChange: 0, correct: true }
            ],
            explanation: "If the opponent knew that the player had a penalty, such as when seeing the player obviously take penalty relief, the player gets no penalty for failing to tell the opponent about it.",
            example: "Example: You are exempt from the loss of hole penalty if your opponent watched you drop your ball out of a water hazard."
        },
        {
            question: "In match play, you are uncertain about a rule. You decide to play two balls for the rest of the hole and ask the Committee for a ruling later.",
            choices: [
                { text: "You must choose the lowest score.", scoreChange: 1 },
                { text: "You lose the hole.", scoreChange: 0, correct: true },
                { text: "You must choose the highest score.", scoreChange: 2 }
            ],
            explanation: "A player who is uncertain about the right procedure in a match is not allowed to play out the hole with two balls. That procedure applies only in stroke play.",
            example: "Example: Match play forces you to decide on a single course of action; playing two balls is strictly forbidden."
        },
        {
            question: "In match play, your opponent plays out of turn from the fairway.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "Loss of hole.", scoreChange: 2 },
                { text: "No penalty, but you may cancel their stroke.", scoreChange: 0, correct: true }
            ],
            explanation: "In match play, the order of play is fundamental; if a player plays out of turn, the opponent may cancel that stroke and make the player play again.",
            example: "Example: You can let a terrible out-of-turn shot stand, but force your opponent to replay a perfect approach shot."
        },
        {
            question: "In stroke play, you play out of turn to save time.",
            choices: [
                { text: "No penalty, 'Ready Golf' is allowed.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "General Penalty.", scoreChange: 2 }
            ],
            explanation: "In stroke play, there is no penalty for playing out of turn, and players are both allowed and encouraged to play 'ready golf' in a safe and responsible way.",
            example: "Example: Ready Golf has been officially endorsed to combat slow play on courses worldwide."
        },
        {
            question: "In a stroke play competition under the World Handicap System, you return your scorecard without writing your handicap on it.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "No penalty.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 1 }
            ],
            explanation: "Following the adoption of the World Handicap System in 2023, players are no longer penalized for failing to put their handicap on their scorecard. The committee is responsible for calculating handicap strokes.",
            example: "Example: Prior to 2023, this administrative error caused many heartbreaking disqualifications."
        },
        {
            question: "In stroke play, you return a scorecard with a lower score because you excluded a penalty stroke you did not know you had incurred.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "The score is adjusted and the penalty is applied, no DQ.", scoreChange: 0, correct: true },
                { text: "The lower score stands.", scoreChange: 1 }
            ],
            explanation: "If a player's hole score is lower than the actual score because they excluded a penalty stroke they did not know about before returning the scorecard, they are not disqualified.",
            example: "Example: This rule protects players who unknowingly breached a complex rule from being thrown out of the tournament."
        },
        {
            question: "In stroke play, you return a scorecard that is not signed by you.",
            choices: [
                { text: "Disqualification.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 1 },
                { text: "No penalty, the marker's signature is enough.", scoreChange: 2 }
            ],
            explanation: "The marker and the player must certify the scores by physical signature or electronic certification approved by the Committee. Failing to certify the hole scores results in disqualification.",
            example: "Example: Players spend several minutes in the scoring tent meticulously checking scores and signatures before leaving."
        },
        {
            question: "In a Four-Ball stroke play competition, your partner holes out, but you pick up your ball without finishing the hole.",
            choices: [
                { text: "Your side is disqualified.", scoreChange: 2 },
                { text: "Your side receives the General Penalty.", scoreChange: 1 },
                { text: "No penalty. Your partner's score is the side's score.", scoreChange: 0, correct: true }
            ],
            explanation: "When only one partner holes out, that partner's score is the side's score for the hole. The other partner does not need to hole out.",
            example: "Example: If you hit your tee shot out of bounds in Four-Ball, you can simply pick up and let your partner finish the hole."
        },
        {
            question: "In a Four-Ball competition, you and your partner both fail to tee off on time, arriving 6 minutes late.",
            choices: [
                { text: "Your side is disqualified.", scoreChange: 0, correct: true },
                { text: "Your side receives the General Penalty.", scoreChange: 1 },
                { text: "The first player to tee off receives a penalty.", scoreChange: 2 }
            ],
            explanation: "A side is disqualified if both partners get a penalty of disqualification under Rule 5.3 for starting and ending the round.",
            example: "Example: Arriving more than 5 minutes late to the tee results in disqualification for both players on the side."
        },
        {
            question: "In a Four-Ball stroke play competition, your partner plays a wrong ball. You play the correct ball.",
            choices: [
                { text: "Your side is disqualified.", scoreChange: 2 },
                { text: "Your partner has no valid score for the hole, but your score counts for the side.", scoreChange: 0, correct: true },
                { text: "Your side receives the General Penalty.", scoreChange: 1 }
            ],
            explanation: "If a player breaches a Rule with a penalty of disqualification, the player is not disqualified from the competition, but their score on the hole cannot count for the side.",
            example: "Example: If your partner plays a wrong ball and fails to correct it, they are out of the hole, but you can still post a score for the team."
        },
        {
            question: "In a Foursomes (Alternate Shot) stroke play competition, you accidentally hit the tee shot when it was your partner's turn.",
            choices: [
                { text: "General Penalty, the side must correct the mistake.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke, play as it lies.", scoreChange: 1 },
                { text: "Disqualification.", scoreChange: 2 }
            ],
            explanation: "If a partner makes a stroke in the wrong order in stroke play, the side gets the general penalty and must correct the mistake. The stroke made in the wrong order is canceled.",
            example: "Example: You must swallow the 2-stroke penalty, cancel the shot, and have the correct partner tee off."
        },
        {
            question: "In a Foursomes (Alternate Shot) match play competition, you accidentally hit the tee shot when it was your partner's turn.",
            choices: [
                { text: "General Penalty.", scoreChange: 1 },
                { text: "Your side loses the hole.", scoreChange: 0, correct: true },
                { text: "No penalty, but your opponent may cancel the stroke.", scoreChange: 2 }
            ],
            explanation: "In match play, if you or your partner makes a stroke in the wrong order in Foursomes, your side immediately loses the hole.",
            example: "Example: Match play is unforgiving with Alternate Shot rules; playing out of turn ends the hole instantly."
        },
        {
            question: "In a Stableford competition, you fail to hole out.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "General Penalty.", scoreChange: 1 },
                { text: "You receive 0 points for the hole.", scoreChange: 0, correct: true }
            ],
            explanation: "A player who does not hole out under the Rules for any reason gets zero points for the hole. They are not disqualified.",
            example: "Example: To help pace of play, players are encouraged to stop playing a hole when their score will result in zero points."
        },
        {
            question: "In a Stableford competition, you play from a wrong place, resulting in a serious breach. You do not correct the mistake.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "You receive 0 points for the hole.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 1 }
            ],
            explanation: "Failure to correct a mistake of playing from a wrong place when there is a serious breach means the player gets zero points for the hole, but is not disqualified.",
            example: "Example: Stableford is designed to prevent full-round disqualifications for single-hole blow-ups or uncorrected procedural errors."
        },
        {
            question: "In a Stableford competition, you realize on the 2nd hole that you have 15 clubs in your bag.",
            choices: [
                { text: "Deduct two points per hole for a maximum of four points deducted from your total round score.", scoreChange: 0, correct: true },
                { text: "Disqualification.", scoreChange: 2 },
                { text: "General Penalty applied to the hole.", scoreChange: 1 }
            ],
            explanation: "Penalties other than disqualification are added to your score, except for excess clubs, where points are deducted from your total round score for a breach.",
            example: "Example: The Committee will manually subtract the points from your final tally at the end of the round."
        },
        {
            question: "In a Stableford competition, you unknowingly leave out a penalty stroke on your scorecard that would have lowered your points.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "The Committee adjusts your points, no DQ.", scoreChange: 0, correct: true },
                { text: "Your score stands.", scoreChange: 1 }
            ],
            explanation: "If you fail to include a penalty on your scorecard that you did not know about, you are not disqualified; the Committee simply adjusts the points.",
            example: "Example: The modernization of scoring protects players from honest, complex rules misunderstandings."
        },
        {
            question: "In a Maximum Score stroke play competition, you reach the maximum score limit for the hole but haven't holed out.",
            choices: [
                { text: "You must hole out.", scoreChange: 2 },
                { text: "You receive the maximum score and should pick up your ball.", scoreChange: 0, correct: true },
                { text: "Disqualification.", scoreChange: 1 }
            ],
            explanation: "If you do not hole out correctly under the Rules for any reason, you get the maximum score for the hole. To help pace of play, you are encouraged to stop playing.",
            example: "Example: If the max score is Net Double Bogey, simply pick the ball up once you reach it to speed up play."
        },
        {
            question: "In a Par/Bogey competition, you fail to hole out.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "General Penalty.", scoreChange: 1 },
                { text: "You lose the hole.", scoreChange: 0, correct: true }
            ],
            explanation: "A player who does not hole out under the Rules for any reason loses the hole. They are not disqualified.",
            example: "Example: Par/Bogey is scored like match play against the course; if you can't beat or tie the fixed score, you lose the hole and move on."
        },
        {
            question: "In stroke play, you are uncertain of a rule and play two balls. You score a 4 with both balls, but fail to report the situation to the Committee.",
            choices: [
                { text: "Disqualification.", scoreChange: 0, correct: true },
                { text: "Your score of 4 stands.", scoreChange: 2 },
                { text: "General Penalty.", scoreChange: 1 }
            ],
            explanation: "The player must report the facts of the situation to the Committee before returning the scorecard, even if the player scores the same with both balls. The player is disqualified if they fail to do so.",
            example: "Example: The Committee must always be informed of procedural uncertainties to ensure the integrity of the field."
        },
        {
            question: "In stroke play, you are uncertain of a rule and play two balls. The original ball was played from a wrong place, resulting in a serious breach. What is your score?",
            choices: [
                { text: "The score with the original ball counts.", scoreChange: 2 },
                { text: "The score with the second ball counts, plus a General Penalty (2 strokes).", scoreChange: 0, correct: true },
                { text: "Disqualification.", scoreChange: 1 }
            ],
            explanation: "If it was a serious breach, the score with the ball played to correct the mistake counts, and the player gets the general penalty (two penalty strokes) added to that score.",
            example: "Example: The stroke made with the original ball from the wrong place and any subsequent strokes with it do not count."
        },
        {
            question: "A referee gives you an incorrect ruling during a round, and you take an action in breach of a Rule based on their instruction.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "General Penalty.", scoreChange: 1 },
                { text: "No penalty, the wrong ruling stands if it is too late to correct.", scoreChange: 0, correct: true }
            ],
            explanation: "If a player takes an action in breach of a Rule based on a reasonable misunderstanding of a referee's instruction, there is no penalty and the instruction is treated like a wrong ruling.",
            example: "Example: If a referee tells you to lift your ball when not allowed, you are protected from penalty."
        },
        {
            question: "After a stroke play competition has closed, the Committee realizes they miscalculated a handicap, resulting in the wrong player winning.",
            choices: [
                { text: "The result stands.", scoreChange: 2 },
                { text: "The players must play a playoff.", scoreChange: 1 },
                { text: "The mistake should be corrected and the results amended.", scoreChange: 0, correct: true }
            ],
            explanation: "An administrative mistake is a procedural error in relation to the administration of the competition and there is no time limit for correcting such a mistake.",
            example: "Example: Trophies have been re-awarded days after a tournament due to committee mathematical errors."
        },
        {
            question: "When applying the Rules, video evidence shows a player's ball moved, but the movement could not reasonably have been seen with the naked eye.",
            choices: [
                { text: "General Penalty.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "The video evidence is disregarded.", scoreChange: 0, correct: true }
            ],
            explanation: "When the Committee is deciding questions of fact, if the facts shown on the video could not reasonably have been seen with the naked eye, that video evidence will be disregarded even if it indicates a breach.",
            example: "Example: This standard protects players from high-definition, super-slow-motion cameras catching micro-movements."
        },
        {
            question: "The decision to limit video evidence for infractions that 'can't be seen with the naked eye' was widely nicknamed after which LPGA Tour professional?",
            choices: [
                { text: "Michelle Wie", scoreChange: 2 },
                { text: "Nelly Korda", scoreChange: 1 },
                { text: "Lexi Thompson", scoreChange: 0, correct: true }
            ],
            explanation: "Media outlets nicknamed it the 'Lexi Thompson rule' following an incident at the 2017 ANA Inspiration where she was retroactively penalized four strokes from a TV viewer's report.",
            example: "Example: The uproar over her 4-stroke penalty for mis-replacing a ball by an invisible margin prompted the governing bodies to act."
        },
        {
            question: "Can a Committee set its own standards of player conduct and issue penalties for breaching them?",
            choices: [
                { text: "No, only the USGA/R&A can set conduct rules.", scoreChange: 2 },
                { text: "Yes, but they can only issue warnings.", scoreChange: 1 },
                { text: "Yes, the Committee may adopt a Code of Conduct as a Local Rule.", scoreChange: 0, correct: true }
            ],
            explanation: "The Committee may set its own standards of player conduct in a Code of Conduct adopted as a Local Rule. The Code may include penalties such as a one-stroke penalty or the general penalty.",
            example: "Example: A club can legally assess a 1-stroke penalty to a player for failing to rake a bunker under their Code of Conduct."
        },
        {
            question: "During a round, you ask a spectator how far you are from the 150-yard marker.",
            choices: [
                { text: "General Penalty.", scoreChange: 2 },
                { text: "No penalty, this is public information.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Advice does not include public information, such as the distance from one point to another, wind direction, or the location of things on the course.",
            example: "Example: Discussing yardages or wind direction with anyone, including opponents and fans, is entirely legal."
        },
        {
            question: "In a team competition, the Committee may adopt a Local Rule allowing each team to name one person who may give advice to players on the team.",
            choices: [
                { text: "This is false.", scoreChange: 2 },
                { text: "This is true, and they are called the 'Advice Giver'.", scoreChange: 0, correct: true },
                { text: "This is true, but they cannot step onto the putting green.", scoreChange: 1 }
            ],
            explanation: "The Committee may adopt a Local Rule allowing each team to name one person (an 'advice giver') who may give advice to players on the team during a round.",
            example: "Example: College golf coaches frequently utilize this rule to legally coach their players mid-round."
        },
        {
            question: "You use a laser rangefinder that measures elevation changes (slope) on the 1st hole.",
            choices: [
                { text: "Disqualification immediately.", scoreChange: 2 },
                { text: "1 penalty stroke on the first breach, Disqualification for a second breach.", scoreChange: 1},
                { text: "No penalty as long as it's turned off.", scoreChange: 0, correct: true  }
            ],
            explanation: "Using a device to measure elevation changes is not allowed. The penalty for the first breach of using equipment in an abnormal way is the General Penalty, and the penalty for a second breach is Disqualification.",
            example: "Example: Make sure the 'slope' toggle switch on your rangefinder is visibly turned off before teeing off."
        },
        {
            question: "You listen to music through headphones specifically to help establish a smooth swing tempo.",
            choices: [
                { text: "General Penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty.", scoreChange: 2 }
            ],
            explanation: "Listening to music or other audio to eliminate distractions or to help with swing tempo is not allowed and is a breach of Rule 4.3.",
            example: "Example: Using audio specifically to gain a competitive advantage in your swing mechanics is banned."
        },
        {
            question: "You slam your driver into the ground in anger, snapping the shaft. Can you replace it?",
            choices: [
                { text: "Yes, but with a 2-stroke penalty.", scoreChange: 1 },
                { text: "No, because the club was damaged through abuse.", scoreChange: 0, correct: true },
                { text: "Yes, broken clubs can always be replaced.", scoreChange: 2 }
            ],
            explanation: "If a player damages a club during a round, they may continue to make strokes with it, but they must not replace it if the damage was caused by abuse.",
            example: "Example: If a Tour Pro snaps their putter in frustration, they will have to putt with their wedge for the remainder of the round."
        },
        {
            question: "Under the modifications for players with disabilities, are players who are amputees allowed to anchor the club?",
            choices: [
                { text: "No, anchoring is universally banned.", scoreChange: 2 },
                { text: "Yes, under Rule 25.3b.", scoreChange: 0, correct: true },
                { text: "Yes, but only with a putter.", scoreChange: 1 }
            ],
            explanation: "Rule 25 modifies certain Rules for players with disabilities. Modifications for players who are amputees include an exception allowing them to anchor the club.",
            example: "Example: The 2023 integration of Rule 25 directly into the main rulebook ensures inclusive practices without needing local rules."
        },
        {
            question: "Under the modifications for players with disabilities, a player's physical limitations make it difficult to know if they dropped the ball from knee height.",
            choices: [
                { text: "They must have their caddie drop it.", scoreChange: 1 },
                { text: "They must place the ball instead.", scoreChange: 2 },
                { text: "The Committee should accept the player's reasonable judgment and efforts.", scoreChange: 0, correct: true }
            ],
            explanation: "The Committee should accept the player's reasonable judgment that they have done so, taking into account the player's physical limitations.",
            example: "Example: Reasonable effort to drop from knee height is sufficient for players with assistive mobility devices."
        },
        {
            question: "When applying the rule against unreasonable delay to players with disabilities, how should Committees act?",
            choices: [
                { text: "They must strictly enforce the 40-second rule.", scoreChange: 2 },
                { text: "They cannot enforce pace of play.", scoreChange: 1 },
                { text: "They should use a more relaxed interpretation of unreasonable delay.", scoreChange: 0, correct: true }
            ],
            explanation: "Taking factors like weather and assistive mobility devices into account, it may be appropriate for Committees to use a more relaxed interpretation of what constitutes unreasonable delay.",
            example: "Example: Allowances must be made for the extra time it may take to navigate terrain in a wheeled mobility device."
        },
        {
            question: "You oversleep and arrive at the 1st tee exactly 2 minutes after your assigned starting time.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "General Penalty applied to the first hole.", scoreChange: 0, correct: true },
                { text: "No penalty.", scoreChange: 1 }
            ],
            explanation: "Arriving late but within five minutes of your starting time usually carries the General Penalty (2 strokes) rather than immediate disqualification.",
            example: "Example: Rory McIlroy famously nearly missed his Ryder Cup tee time in 2012, arriving with just minutes to spare."
        },
        {
            question: "You oversleep and arrive at the 1st tee exactly 6 minutes after your assigned starting time.",
            choices: [
                { text: "Disqualification.", scoreChange: 0, correct: true },
                { text: "General Penalty applied to the first hole.", scoreChange: 1 },
                { text: "Loss of hole.", scoreChange: 2 }
            ],
            explanation: "If you arrive more than five minutes after your starting time, you are disqualified.",
            example: "Example: There is a strict 5-minute grace period before the ultimate penalty is assessed."
        },
        {
            question: "You refuse to play your next shot because you are fiercely arguing with a referee about a previous ruling.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "Disqualification.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 2 }
            ],
            explanation: "Players must play continuously and at a prompt pace. Refusing to play due to an unreasonable delay results in disqualification.",
            example: "Example: Even if you are furious about a ruling, you must play your shot to keep the pace of play going."
        },
        {
            question: "It is thundering, and you believe there is danger from lightning. You immediately stop play and walk to the clubhouse.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "No penalty, this is allowed.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 1 }
            ],
            explanation: "You may stop play if you believe there is danger from lightning, without waiting for the Committee to suspend play.",
            example: "Example: Player safety is paramount; you do not need official permission to seek shelter from lightning."
        },
        {
            question: "You take penalty relief and drop your ball in the correct relief area. Seconds later, a gust of wind blows it out of bounds.",
            choices: [
                { text: "Replace the ball on the exact spot it had come to rest without penalty.", scoreChange: 0, correct: true },
                { text: "Play a new ball under penalty of Stroke and Distance.", scoreChange: 2 },
                { text: "Re-drop the ball for 1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "A new exception in 2023 provides that a ball at rest must be replaced if it moves to another area of the course or comes to rest out of bounds after being dropped, placed or replaced.",
            example: "Example: This protects players from being unfairly penalized by gravity or wind immediately after taking a legal drop."
        },
        {
            question: "In stroke play, you hit a shot from the rough and realize it was a stray ball, not yours.",
            choices: [
                { text: "Disqualification.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "2 penalty strokes, and you must correct the mistake.", scoreChange: 0, correct: true }
            ],
            explanation: "Playing a wrong ball in stroke play results in a two-stroke penalty, and you must correct the mistake by playing the right ball.",
            example: "Example: Failing to correct the mistake of playing a wrong ball before teeing off on the next hole results in disqualification."
        },
        {
            question: "In match play, you are searching for your opponent's ball in the deep rough and accidentally kick it.",
            choices: [
                { text: "Loss of hole.", scoreChange: 2 },
                { text: "No penalty, replace the ball.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "If an opponent accidentally moves your ball in match play while searching for it, there is no penalty, but the ball must be replaced.",
            example: "Example: Accidental kicks during a search do not incur penalties to encourage players to help each other look."
        },
        {
            question: "In match play, you carelessly walk across the fairway and accidentally kick your opponent's ball which was in plain sight.",
            choices: [
                { text: "1 penalty stroke, and the ball must be replaced.", scoreChange: 0, correct: true },
                { text: "Loss of hole.", scoreChange: 2 },
                { text: "No penalty.", scoreChange: 1 }
            ],
            explanation: "If you touch or move an opponent's ball when NOT searching for it, you receive 1 penalty stroke and the ball must be replaced.",
            example: "Example: You must be careful where you walk; clumsy navigation costs a stroke."
        },
        {
            question: "In match play, your opponent's ball is rolling past the hole and you deliberately stop it with your foot when there is no reasonable chance it can be holed.",
            choices: [
                { text: "You lose the hole.", scoreChange: 2 },
                { text: "You win the hole.", scoreChange: 0, correct: true },
                { text: "Your opponent replays the stroke.", scoreChange: 1 }
            ],
            explanation: "In match play, if you deliberately stop your opponent's moving ball when there is no reasonable chance it can be holed, you avoid the standard penalty for deflecting a ball under the exception to Rule 11.2a. Instead, this action simply concedes their next tap-in stroke (Rule 3.2b(1)) or wins you the hole outright if their putt had to go in to tie the hole (Rule 3.2a(1)).",
            example: "Example: Stopping a completely missed putt to save time essentially acts as a concession of your opponent's next stroke."
        },
        {
            question: "You find a muddy ball in the rough. You lift it to identify it without marking its spot first.",
            choices: [
                { text: "No penalty.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 0, correct: true },
                { text: "General Penalty.", scoreChange: 1 }
            ],
            explanation: "You must add one penalty stroke if you did not mark the ball before lifting it, cleaned it more than necessary, or lifted it when not necessary to identify it.",
            example: "Example: Always place a tee right behind the ball before touching it to identify your mark."
        },
        {
            question: "You hit your tee shot and the ball shatters into pieces in mid-air.",
            choices: [
                { text: "The stroke is canceled, replay without penalty.", scoreChange: 0, correct: true },
                { text: "The stroke counts, play the largest piece.", scoreChange: 2 },
                { text: "1 penalty stroke, drop a new ball.", scoreChange: 1 }
            ],
            explanation: "If a player's ball breaks into pieces after a stroke, there is no penalty and the stroke does not count. The player must play another ball from where that stroke was made.",
            example: "Example: During a cold morning round, a cracked golf ball allows you to legally re-tee a fresh ball."
        },
        {
            question: "Your ball rests in a hole dug by a dog in the rough.",
            choices: [
                { text: "Play as it lies.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "Free relief.", scoreChange: 0, correct: true }
            ],
            explanation: "An animal hole is an abnormal course condition, and you are allowed free relief anywhere in the general area. A dog is an animal, whereas worms or insects are loose impediments.",
            example: "Example: Holes dug by mammals or reptiles grant free relief under abnormal course conditions."
        },
        {
            question: "Your ball is just off the green on the fringe. There is sand in your line of play, so you brush it away.",
            choices: [
                { text: "General Penalty.", scoreChange: 0, correct: true },
                { text: "No penalty.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Sand and loose soil are not loose impediments. Removing sand anywhere other than the putting green to improve your line of play incurs the General Penalty.",
            example: "Example: Tour Pros must resist the urge to sweep sand off the fringe, even if it was splashed there from a bunker."
        },
        {
            question: "You arrive at your ball in the morning and brush away heavy dew on your line of play.",
            choices: [
                { text: "General Penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty.", scoreChange: 2 }
            ],
            explanation: "Dew, frost, and water are not loose impediments and you must not remove them to improve your conditions, incurring the General Penalty.",
            example: "Example: Early morning tee times require players to account for heavy dew on their putts without sweeping it away."
        },
        {
            question: "Your ball rests in temporary water. How do you find the point of maximum available relief?",
            choices: [
                { text: "The driest spot within 2 club-lengths.", scoreChange: 1 },
                { text: "Where the abnormal condition least interferes with the stroke you would have made.", scoreChange: 0, correct: true },
                { text: "Directly behind the temporary water.", scoreChange: 2 }
            ],
            explanation: "It is the estimated point where the abnormal course condition least interferes with the stroke you would have made from the original spot if the condition did not exist.",
            example: "Example: The point of maximum available relief may be where your ball will be in shallower water than where you will stand, or vice versa."
        },
        {
            question: "Which of the following is an option for Red Penalty Areas that is NOT allowed for Yellow Penalty Areas?",
            choices: [
                { text: "Lateral relief.", scoreChange: 0, correct: true },
                { text: "Stroke-and-distance relief.", scoreChange: 2 },
                { text: "Back-on-the-line relief.", scoreChange: 1 }
            ],
            explanation: "If your ball last crossed the edge of a red penalty area, you have the extra option to take lateral relief (within two club-lengths). Yellow penalty areas only allow back-on-the-line or stroke-and-distance.",
            example: "Example: At the Masters on the 12th hole (yellow area), players in Rae's Creek must use the drop zone or go back-on-the-line."
        },
        {
            question: "You hit your tee shot into a Red Penalty Area. You declare it unplayable under Rule 19 to take lateral relief.",
            choices: [
                { text: "This is a legal 1-stroke penalty option.", scoreChange: 2 },
                { text: "This is a 2-stroke penalty.", scoreChange: 1 },
                { text: "You cannot take unplayable ball relief for a ball in a penalty area.", scoreChange: 0, correct: true }
            ],
            explanation: "You are allowed to take unplayable ball relief anywhere on the course EXCEPT when your ball is in a penalty area. You must proceed under the penalty area rules.",
            example: "Example: A player cannot use the 'unplayable' rule to escape a penalty area; they are strictly bound by Rule 17."
        },
        {
            question: "Your ball is buried under the lip of a greenside bunker. You declare it unplayable and drop it completely OUTSIDE the bunker going back-on-the-line.",
            choices: [
                { text: "This costs 2 penalty strokes.", scoreChange: 0, correct: true },
                { text: "This costs 1 penalty stroke.", scoreChange: 1 },
                { text: "You cannot drop outside a bunker.", scoreChange: 2 }
            ],
            explanation: "As an extra relief option when your ball is in a bunker, for a total of two penalty strokes you may play from outside the bunker using the back-on-a-line procedure.",
            example: "Example: Rory McIlroy utilized this 2-stroke unplayable bunker relief to escape a brutal lie in a deep pot bunker."
        },
        {
            question: "Your ball rests against the flagstick in the hole. Part of the ball is below the surface, but it hasn't fallen to the bottom.",
            choices: [
                { text: "You must carefully remove the flagstick.", scoreChange: 1 },
                { text: "The ball is treated as holed.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke to tap it in.", scoreChange: 2 }
            ],
            explanation: "If a ball rests against the flagstick and any part of the ball is below the surface of the putting green, the ball is treated as holed.",
            example: "Example: This rule change alleviated the anxiety of carefully wiggling the pin out to ensure the ball drops."
        },
        {
            question: "Your putt stops right on the lip of the hole, overhanging the edge. You wait 15 seconds, and it falls in.",
            choices: [
                { text: "You have holed out with your previous stroke, but must add 1 penalty stroke.", scoreChange: 0, correct: true },
                { text: "It is considered holed with no penalty.", scoreChange: 2 },
                { text: "You must replace the ball on the lip.", scoreChange: 1 }
            ],
            explanation: "You are allowed a reasonable time to reach the hole and ten extra seconds. If it falls in after that time, you have holed out but must add one penalty stroke.",
            example: "Example: Tour players often nervously watch their ball for exactly 10 seconds before tapping it in."
        },
        {
            question: "You drop your ball from knee height. It accidentally hits your foot before striking the ground.",
            choices: [
                { text: "Play it as it lies.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "You must drop it again in the right way.", scoreChange: 0, correct: true }
            ],
            explanation: "A dropped ball must not touch any part of the player's body or equipment before it hits the ground. If it does, it was dropped incorrectly and must be dropped again.",
            example: "Example: Ensure your feet are clear of the drop zone when releasing the ball from knee height."
        },
        {
            question: "You drop your ball from knee height. It hits the ground and rolls 3 club-lengths away.",
            choices: [
                { text: "You must re-drop.", scoreChange: 0, correct: true },
                { text: "Place the ball.", scoreChange: 1 },
                { text: "Play it as it lies.", scoreChange: 2 }
            ],
            explanation: "If a dropped ball comes to rest outside the allowed relief area (which is typically one club length), you must lift it and drop it again.",
            example: "Example: On steep slopes, players often have to re-drop twice, after which they are allowed to place the ball."
        },
        {
            question: "In stroke play, you drop a ball in a wrong place and play it, bypassing a massive tree in your line of play.",
            choices: [
                { text: "General Penalty.", scoreChange: 1 },
                { text: "This is a Serious Breach, you must correct the mistake or face DQ.", scoreChange: 0, correct: true },
                { text: "Play it as it lies.", scoreChange: 2 }
            ],
            explanation: "A Serious Breach is when playing from a wrong place gives the player a significant advantage. The player must correct the mistake or face disqualification.",
            example: "Example: Dropping your ball in the fairway instead of the deep rough to bypass an obstacle requires immediate correction."
        },
        {
            question: "Your ball is on the putting green, and you notice several spike marks on your line of putt.",
            choices: [
                { text: "You may repair them without penalty.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke to repair them.", scoreChange: 1 },
                { text: "You cannot repair spike marks.", scoreChange: 2 }
            ],
            explanation: "A major rule change prior to 2019 allowed players to repair damage on the putting green, including spike marks, without penalty.",
            example: "Example: You no longer have to putt over someone else's spike marks on the green."
        },
        {
            question: "How long are you allowed to search for your ball before it is officially declared lost?",
            choices: [
                { text: "5 minutes.", scoreChange: 2 },
                { text: "3 minutes.", scoreChange: 0, correct: true },
                { text: "10 minutes.", scoreChange: 1 }
            ],
            explanation: "A ball is lost if not found in three minutes after the player or their caddie begins to search for it. The time was reduced from 5 minutes to speed up play.",
            example: "Example: During the 2019 Open Championship, several players fell victim to the strict 3-minute search rule in the thick fescue."
        },
        {
            question: "From what height must you drop your golf ball when taking relief?",
            choices: [
                { text: "Knee height.", scoreChange: 0, correct: true },
                { text: "Shoulder height.", scoreChange: 2 },
                { text: "Waist height.", scoreChange: 1 }
            ],
            explanation: "When dropping a ball, you must hold the ball at knee height and let go of the ball so that it falls straight down.",
            example: "Example: It is no longer legal to drop the ball from shoulder height; the 2019 rules update mandated knee height drops."
        },
        {
            question: "You putt from 10 feet away and decide to leave the unattended flagstick in the hole. Your putt strikes the flagstick.",
            choices: [
                { text: "1 penalty stroke.", scoreChange: 1 },
                { text: "No penalty, play the ball as it lies.", scoreChange: 0, correct: true },
                { text: "2 penalty strokes.", scoreChange: 2 }
            ],
            explanation: "There is no penalty if a ball in motion hits the flagstick left in the hole. This was updated in 2019 to speed up play.",
            example: "Example: Bryson DeChambeau frequently leaves the flagstick in on long putts for a strategic backstop."
        },
        {
            question: "Your ball is outside a Ground Under Repair (GUR) area, but you must stand inside the GUR to hit the ball.",
            choices: [
                { text: "You must play it as it lies.", scoreChange: 2 },
                { text: "You may take free relief.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke to take relief.", scoreChange: 1 }
            ],
            explanation: "Free relief is allowed when an abnormal course condition (like GUR) interferes with the area of your intended stance or swing.",
            example: "Example: Players frequently get free drops if their feet are touching the white paint of a GUR area."
        },
        {
            question: "Your ball comes to rest in a completely flooded bunker, and you cannot find a spot in the bunker to drop that isn't in temporary water.",
            choices: [
                { text: "You must play it as it lies.", scoreChange: 2 },
                { text: "You may drop outside the bunker under penalty of one stroke.", scoreChange: 0, correct: true },
                { text: "You get free relief outside the bunker.", scoreChange: 1 }
            ],
            explanation: "If there is no nearest point of complete relief in the bunker, you may take relief outside the bunker for one penalty stroke using the back-on-the-line procedure.",
            example: "Example: A completely flooded sand trap does not grant a free drop outside of it."
        },
        {
            question: "Your approach shot plugs deeply into the soft fairway, embedding in its own pitch mark.",
            choices: [
                { text: "Free relief.", scoreChange: 0, correct: true },
                { text: "Must play as it lies.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "A player is allowed free relief for a ball embedded in its own pitch-mark anywhere in the general area.",
            example: "Example: You may lift, clean, and drop your ball within one club-length of the spot right behind where it embedded."
        },
        {
            question: "Your tee shot splashes into a lake. You declare a provisional ball and re-tee.",
            choices: [
                { text: "This is a legal provisional ball.", scoreChange: 2 },
                { text: "The new ball becomes the ball in play under Stroke-and-Distance penalty.", scoreChange: 0, correct: true },
                { text: "Loss of hole.", scoreChange: 1 }
            ],
            explanation: "A provisional ball may only be played if a ball might be lost outside a penalty area or out of bounds. You cannot play a provisional for a ball known to be in a penalty area.",
            example: "Example: If you hit it directly into the middle of a massive pond, you cannot hit a 'provisional'."
        },
        {
            question: "You hit a provisional ball. You then find your original ball in bounds within 3 minutes, but it is in a terrible lie.",
            choices: [
                { text: "You must abandon the provisional and play the original ball.", scoreChange: 0, correct: true },
                { text: "You may choose to play either ball.", scoreChange: 1 },
                { text: "You must play the provisional.", scoreChange: 2 }
            ],
            explanation: "If your original ball is found on the course before becoming lost, you must abandon your provisional ball and continue playing your original ball.",
            example: "Example: Even if your provisional is in the middle of the fairway, you must play your original ball from the thick rough."
        },
        {
            question: "Your ball lands in a fairway bunker. Right next to your ball is a dead leaf.",
            choices: [
                { text: "1 penalty stroke to move it.", scoreChange: 1 },
                { text: "You cannot touch it.", scoreChange: 2 },
                { text: "You may remove the leaf without penalty.", scoreChange: 0, correct: true }
            ],
            explanation: "Under the modernized rules, you may touch and remove loose impediments (like leaves, twigs, and stones) in a bunker without penalty.",
            example: "Example: Prior to 2019, players were severely restricted in bunkers, but the rule change made sand play far more forgiving."
        },
        {
            question: "Your ball comes to rest in a penalty area, right next to a sprinkler head.",
            choices: [
                { text: "Free relief.", scoreChange: 0, correct: true },
                { text: "Play as it lies.", scoreChange: 2 },
                { text: "1 penalty stroke.", scoreChange: 1 }
            ],
            explanation: "Sprinkler heads are immovable obstructions, which are abnormal course conditions. You are allowed free relief when they interfere, even in a penalty area.",
            example: "Example: Artificial objects like drains and sprinklers grant relief regardless of being inside a hazard."
        },
        {
            question: "In match play, your opponent accidentally drops their putter on your ball marker on the green, moving it.",
            choices: [
                { text: "No penalty, replace the marker.", scoreChange: 0, correct: true },
                { text: "1 penalty stroke for opponent.", scoreChange: 1 },
                { text: "Loss of hole for opponent.", scoreChange: 2 }
            ],
            explanation: "If a ball-marker is accidentally moved by an opponent in match play, there is no penalty and the marker must be replaced.",
            example: "Example: Accidental movement of markers on the green is generally forgiven for all players."
        },
        {
            question: "In what year were the first known written rules of golf, the '13 Articles', drafted?",
            choices: [
                { text: "1744", scoreChange: 0, correct: true },
                { text: "1899", scoreChange: 2 },
                { text: "1952", scoreChange: 1 }
            ],
            explanation: "The earliest surviving written rules of golf were produced by the Gentlemen Golfers of Leith on March 7, 1744, consisting of 13 rules.",
            example: "Example: The 13 Articles laid the foundation for the game, including rules on water hazards and holing out."
        }
    ]
};

