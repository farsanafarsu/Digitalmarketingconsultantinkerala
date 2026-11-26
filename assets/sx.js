(function(){
  // SEO page motion. Content is all in the HTML; this only animates it, and does nothing when reduced motion is on.
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)) return;
  var d=document, root=d.documentElement; root.classList.add('sxa');
  function each(sel,fn){Array.prototype.forEach.call(d.querySelectorAll(sel),fn)}
  function once(el,fn,th){var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){io.disconnect();fn()}},{threshold:th||.3});io.observe(el)}

  // reading progress bar
  var bar=d.createElement('div'); bar.className='sx-prog'; bar.setAttribute('aria-hidden','true'); d.body.appendChild(bar);
  var tick=false; function prog(){tick=false; var h=root.scrollHeight-innerHeight; bar.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')'}
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(prog)}},{passive:true}); prog();

  // staggered children
  each('.sx-ai-c ul,.sx-cost,.sx-towns,.sx-t tbody',function(l){l.classList.add('sx-st'); Array.prototype.forEach.call(l.children,function(c,i){c.style.setProperty('--i',i)}); once(l,function(){l.classList.add('in')},.15)});

  // hero numbers
  each('.lp-stats b',function(b){
    var m=b.textContent.match(/^(\d+)(.*)$/); if(!m) return;
    var end=+m[1], suf=m[2]; b.classList.add('sx-count'); b.textContent='0'+suf;
    once(b,function(){var t0=performance.now(),dur=1400;(function f(t){var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);b.textContent=Math.round(end*e)+suf;if(p<1)requestAnimationFrame(f)})(t0)},.5);
  });

  // lost searches: type the query
  each('.sx-lost',function(card,k){
    var q=card.querySelector('.sx-q'); if(!q) return;
    var svg=q.querySelector('svg'), txt=q.textContent.trim(); q.textContent=''; if(svg) q.appendChild(svg);
    var full=d.createElement('span'); full.textContent=txt; full.style.cssText='position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap'; q.appendChild(full);
    var sp=d.createElement('span'); sp.setAttribute('aria-hidden','true'); q.appendChild(sp);
    once(card,function(){
      var i=0; setTimeout(function step(){sp.textContent=txt.slice(0,++i); if(i<txt.length) setTimeout(step,28+Math.random()*45); else {q.classList.add('done'); card.classList.add('typed')}}, 450+k*180);
    },.35);
  });

  // page two: climb from 14 to 4
  var serp=d.querySelector('.sx-serp');
  if(serp){
    var you=serp.querySelector('.sx-serp-you'), num=you.querySelector('b'), lis=serp.querySelectorAll('.sx-serp-l li');
    function target(){return lis[3].offsetTop-you.offsetTop}
    once(serp,function(){
      setTimeout(function(){
        lis[3].classList.add('down'); lis[4].classList.add('down'); setTimeout(function(){lis[3].querySelector('b').textContent='5'; lis[4].querySelector('b').textContent='6'},900);
        you.style.transform='translateY('+target()+'px)'; serp.classList.add('climb');
        var n=14,iv=setInterval(function(){n--; num.textContent=n; if(n<=4) clearInterval(iv)},140);
      },700);
    },.5);
    addEventListener('resize',function(){if(serp.classList.contains('climb')){you.style.transition='none'; you.style.transform='none'; you.style.transform='translateY('+target()+'px)'; void you.offsetWidth; you.style.transition=''}});
  }
})();
