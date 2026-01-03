document.addEventListener('DOMContentLoaded', function () {
     const summaryBtn = document.getElementById("summaryBtn")
     const summaryOp = document.getElementById("summaryOp")
     const dateIp = document.getElementById("dateIp")
     let week;

     if (summaryBtn && summaryOp && dateIp) {
          summaryBtn.onclick = function(){

               week = dateIp.value;
               week = Number(week);

               if(week === 1){
                    summaryOp.textContent = `This week, Pastor **Raymond Kasinganeti** led us deeper into our journey through the Book of Ruth, guiding us into **Ruth chapter 3** with a steady, pastoral hand and a clear spiritual focus. As the service unfolded, it was evident that this was a turning-point chapter—not just for Ruth, but for us as a church preparing for **2026: our year of “Taking Territory.”**

Pastor Raymond began by setting the atmosphere with worship and prayer, reminding us that before territory is taken publicly, it is first claimed **privately in obedience**. In Ruth chapter 3, we see Naomi giving Ruth careful instruction—wisdom born from experience—and Ruth responding with humility and trust. Pastor emphasized that this chapter is about **alignment**: listening, preparing, and positioning ourselves where God is already at work.

As Pastor Raymond walked us through the scripture, he highlighted Ruth’s willingness to follow instruction even when the outcome was uncertain. Ruth did not rush ahead, nor did she shrink back in fear. She prepared herself, went where she was told, and waited patiently. In the same way, Pastor Raymond encouraged us to see that taking territory is not always loud or dramatic—sometimes it is quiet obedience, guided by godly leadership and spiritual discernment.

Throughout the service, Pastor Raymond modeled this leadership himself. He did not push the congregation forward hastily; instead, he led us step by step, allowing the Word to speak, the Spirit to convict, and hearts to respond. Just as Boaz noticed Ruth because she was positioned rightly, Pastor reminded us that **God honors those who position themselves with integrity, purity, and faith**.

One of the strongest moments of the message came as Pastor Raymond spoke about **covering and redemption**. Boaz’s act of covering Ruth symbolized protection, provision, and promise. Pastor connected this to our own lives, declaring that when we follow God’s order, we come under His covering. Taking territory does not mean striving alone—it means resting under God’s authority while He works on our behalf.

As the service drew to a close, Pastor Raymond called us to reflection and prayer. He reminded us that Ruth chapter 3 teaches us how to wait well, trust leadership, and believe that God is arranging outcomes we cannot yet see. Just as Ruth awoke to a new future, we too are awakening to what God is preparing for us as a church.

The message was clear and reassuring: **God is leading us, step by step, through wise instruction, faithful leadership, and obedient hearts.** As we move closer to 2026, Pastor Raymond continues to lead us with clarity, patience, and faith—helping us prepare not just to take territory, but to steward it well.

Join us next Sunday as we continue into the next chapter of this powerful journey. God is moving. God is covering. And God is leading us forward.
`
               }
               else if(week === 2){
                    summaryOp.textContent = `This week, Pastor Raymond Kasinganeti guided us into Ruth chapter 2, continuing our journey of preparation for 2026—our year of “Taking Territory.” 
               
                  From the opening moments of the service, Pastor Raymond set a tone of faith and expectation, reminding us that God often begins great breakthroughs with simple acts of obedience.

      In Ruth chapter 2, we see Ruth stepping into unfamiliar territory. Pastor Raymond carefully walked us through how Ruth did not remain in comfort or fear—she went out to glean, trusting God for provision. She did not know whose field she would enter, but she trusted that God would guide her steps. Pastor emphasized that taking territory begins when we move forward even without full clarity, believing that God is already ahead of us.

      As the Word was taught, Pastor Raymond highlighted how Ruth’s steps were not accidental. Scripture tells us she “happened” to come to the field of Boaz, but Pastor reminded us that there are no coincidences in God’s kingdom. When we step out in faith, God orders our path. Taking territory is not about force—it is about faithfulness.

      Pastor Raymond also drew our attention to Ruth’s character. She moved with humility, diligence, and respect. She worked faithfully in the field and remained teachable. Pastor reminded us that before God expands our territory, He develops our character. The fields we labor in today are preparing us for the future God has promised.

      A powerful emphasis throughout the service was our need for a “Ruth” in our lives. Pastor Raymond shared that Ruth represents loyalty, commitment, and unwavering support. We all need someone who will walk with us when the road is uncertain, stand with us in seasons of loss, and encourage us to keep trusting God. At the same time, Pastor challenged us to ask ourselves: Are we being a Ruth to someone else?

      As Boaz noticed Ruth, Pastor Raymond explained that favor often follows faithfulness. Ruth did not demand attention—her integrity spoke for her. In the same way, when we take territory God’s way, He brings the right people, opportunities, and protection into our lives at the right time.

      The service concluded with a call to action. Pastor Raymond reminded us that Ruth chapter 2 teaches us not to wait for perfect conditions, but to move forward with courage and trust. God provides in the field, not on the sidelines. As we prepare our hearts for 2026, the message was clear: step out, trust God, value godly relationships, and take the territory He has placed before you.

      Join us next Sunday as we continue this powerful journey through the Book of Ruth. God is guiding our steps, shaping our character, and leading us into new territory—together.`;
               }
               else if(week === 3){
                    summaryOp.textContent = `This week, Pastor Raymond Kasinganeti opened our journey through the Book of Ruth by leading us into Ruth chapter 1, laying a strong foundation as we prepare for 2026—our year of “Taking Territory.” From the beginning of the service, Pastor Raymond guided us to understand that before God expands our territory, He often deals with our hearts, relationships, and choices.

      In Ruth chapter 1, we encounter Naomi—a woman marked by loss, transition, and uncertainty. Pastor Raymond gently unpacked how Naomi’s story reflects seasons many of us face, where life does not turn out as planned. Famine, loss, and displacement forced Naomi and her family into unfamiliar territory. Pastor reminded us that sometimes God allows shaking, not to destroy us, but to position us for redemption.

      As the teaching continued, Pastor Raymond focused on the defining moment of the chapter: Ruth’s decision to stay. While Orpah turned back, Ruth clung to Naomi with unwavering commitment, declaring, “Where you go, I will go.” Pastor emphasized that this was more than loyalty—it was a faith decision. Ruth chose relationship, covenant, and God’s purpose over comfort and familiarity.

      Throughout the message, Pastor Raymond highlighted a powerful truth that resonated deeply with the congregation: we all need a Ruth in our lives, but we also need to be a Ruth to others. We need someone who will walk with us through pain, uncertainty, and transition—but we are equally called to offer that same faithfulness, encouragement, and commitment to those around us. Taking territory is never a solo journey; it is walked out in godly relationships.

      Pastor Raymond also pointed out that Ruth’s choice in chapter 1 positioned her for everything that followed. Before she ever stepped into the fields of Boaz, she first stepped into obedience and loyalty. Pastor reminded us that territory is not taken through ambition alone, but through surrender, faith, and obedience to God's leading.

      As the service drew to a close, Pastor Raymond called us to reflect on our own lives. Who is God calling us to walk with? And who has God placed in our lives to walk with us? As we prepare for 2026, Ruth chapter 1 teaches us that taking territory begins with choosing faith over fear, commitment over convenience, and purpose over comfort.

      The message was clear and foundational: God is leading us forward, but He does so through faithful hearts and committed relationships. Join us next week as we continue into Ruth chapter 2, where faith turns into action and God begins to open new doors.`;
               }
               else{
                    summaryOp.textContent = `This data does not exist`
               }
          }
     }

     const countLable = document.getElementById("countLable")
     const plusBtn = document.getElementById("plusBtn")
     let count=0;

     if (plusBtn && countLable) {
          plusBtn.onclick = function(){
               count++;
               countLable.textContent = count;
          }
     }

     // iframe fallback: show a friendly message if the iframe doesn't load
     const mainVideo = document.getElementById('mainVideo');
     const iframeFallback = document.getElementById('iframeFallback');
     if (mainVideo && iframeFallback) {
          let loaded = false;
          const loadTimeout = setTimeout(function () {
               if (!loaded) {
                    mainVideo.style.display = 'none';
                    iframeFallback.style.display = 'block';
               }
          }, 8000); // 8s: adjust if needed

          mainVideo.addEventListener('load', function () {
               loaded = true;
               clearTimeout(loadTimeout);
               iframeFallback.style.display = 'none';
               mainVideo.style.display = '';
          });
     }

});


alert(`PLEASE NOTE THAT THIS IS NOT THE OFFICAL LIFE ACCESS CHURCH WEDSITE.`);


