/* Vedasaram opening animation: sacred words drift in and are drawn into the title. Tap to skip. */
(function () {
  'use strict';
  var WORDS = [
    // Bhagavad Gītā
    'धर्मक्षेत्रे कुरुक्षेत्रे', 'कर्मण्येवाधिकारस्ते', 'योगः कर्मसु कौशलम्', 'स्थितप्रज्ञ', 'मामेकं शरणं व्रज',
    'యోగః కర్మసు కౌశలమ్', 'కృష్ణం వందే జగద్గురుమ్',
    // Rudram
    'नमस्ते रुद्र मन्यव', 'नमः शिवाय', 'ॐ नमो भगवते रुद्राय', 'నమః శివాయ',
    // Viṣṇu Sahasranāmam
    'विश्वं विष्णुर्वषट्कारः', 'शुक्लाम्बरधरं विष्णुम्', 'ఓం నమో నారాయణాయ', 'పద్మనాభ',
    // Rāmāyaṇa
    'श्रीराम जय राम', 'रामो विग्रहवान् धर्मः', 'శ్రీ రామ రామ రామేతి', 'సీతారామ',
    // Mahābhārata / Upaniṣads / Vedas
    'धर्मो रक्षति रक्षितः', 'यतो धर्मस्ततो जयः', 'असतो मा सद्गमय', 'तमसो मा ज्योतिर्गमय',
    'तत्सवितुर्वरेण्यम्', 'अहं ब्रह्मास्मि', 'तत्त्वमसि', 'सत्यमेव जयते', 'ॐ शान्तिः',
    'హరే కృష్ణ', 'ధర్మం', 'సత్యం', 'ॐ'
  ];
  var GOLD = '240,192,64';


  // ── Opening jingle: synthesised live with Web Audio (no recordings) ──
  // A soft tanpura drone on Sa–Pa, a bamboo-flute phrase rising through Rāga Mohanam
  // (S R G P D), and a temple bell as the title lights up. About 5 seconds.
  function vsJingle(ctx, t0) {
    var out = ctx.createGain(); out.gain.value = 1.1; out.connect(ctx.destination);
    // gentle room: a short feedback echo
    var dl = ctx.createDelay(1), fb = ctx.createGain(), wet = ctx.createGain();
    dl.delayTime.value = 0.23; fb.gain.value = 0.28; wet.gain.value = 0.22;
    dl.connect(fb); fb.connect(dl); dl.connect(wet); wet.connect(out);
    var SA = 261.63, END = t0 + 5.6;
    function env(g, at, a, peak, rel, stop) {
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(peak, at + a);
      g.gain.setValueAtTime(peak, Math.max(at + a, stop - rel));
      g.gain.exponentialRampToValueAtTime(0.0001, stop);
    }
    // Tanpura: plucked-and-held Pa, Sa, Sa, low Sa, each rich in harmonics, cycling
    function tanpura(f, at) {
      var g = ctx.createGain(), lp = ctx.createBiquadFilter();
      lp.type = 'lowpass'; lp.frequency.value = 1800; lp.Q.value = 0.7;
      [1, 2, 3, 4, 5, 6].forEach(function (h, i) {
        var o = ctx.createOscillator(), og = ctx.createGain();
        o.type = 'sine'; o.frequency.value = f * h; o.detune.value = (i % 2 ? 3 : -3);
        og.gain.value = [1, .55, .42, .3, .2, .12][i];
        o.connect(og); og.connect(lp); o.start(at); o.stop(END);
      });
      lp.connect(g); g.connect(out); g.connect(dl);
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(0.05, at + 0.04);
      g.gain.exponentialRampToValueAtTime(0.02, at + 1.2);
      g.gain.exponentialRampToValueAtTime(0.0001, Math.min(END, at + 3.2));
    }
    var cyc = [SA * 0.75, SA, SA, SA / 2];          // Pa(low), Sa, Sa, Sa(low)
    for (var k = 0; k < 8; k++) tanpura(cyc[k % 4], t0 + k * 0.62);
    // Flute: sine + soft 2nd harmonic, delayed vibrato, breathy onset
    function flute(f, at, dur, peak) {
      var o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), g2 = ctx.createGain();
      var vib = ctx.createOscillator(), vg = ctx.createGain();
      o.type = 'sine'; o2.type = 'sine'; o.frequency.value = f; o2.frequency.value = f * 2; g2.gain.value = 0.18;
      vib.frequency.value = 5.2; vg.gain.setValueAtTime(0, at); vg.gain.linearRampToValueAtTime(f * 0.012, at + Math.min(0.5, dur * 0.6));
      vib.connect(vg); vg.connect(o.frequency); vg.connect(o2.frequency);
      // slide up into the note from a little below (gamaka)
      o.frequency.setValueAtTime(f * 0.97, at); o.frequency.exponentialRampToValueAtTime(f, at + 0.07);
      o.connect(g); o2.connect(g2); g2.connect(g); g.connect(out); g.connect(dl);
      env(g, at, 0.06, peak || 0.16, Math.min(0.25, dur * 0.5), at + dur);
      [o, o2, vib].forEach(function (x) { x.start(at); x.stop(at + dur + 0.05); });
      // breath
      var n = ctx.createBufferSource(), b = ctx.createBuffer(1, ctx.sampleRate * 0.12, ctx.sampleRate), d = b.getChannelData(0);
      for (var i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
      var bp = ctx.createBiquadFilter(), ng = ctx.createGain();
      bp.type = 'bandpass'; bp.frequency.value = f * 2; bp.Q.value = 3; ng.gain.value = 0.05;
      n.buffer = b; n.connect(bp); bp.connect(ng); ng.connect(out); n.start(at);
    }
    var S = SA * 2, R = S * 9 / 8, G = S * 5 / 4, P = S * 3 / 2, D = S * 5 / 3;
    [[P / 2, .30, .38], [D / 2, .66, .34], [S, 1.00, .36], [R, 1.36, .34], [G, 1.70, .58],
     [R, 2.30, .22], [G, 2.52, .24], [P, 2.76, .32], [D, 3.08, .30]].forEach(function (n) { flute(n[0], t0 + n[1], n[2]); });
    flute(S * 2, t0 + 3.38, 1.9, 0.14);             // high Sa, held as the title glows
    // Temple bell: inharmonic partials with long decays
    function bell(f, at, peak) {
      [[1, 1, 4.5], [2.0, .5, 3.2], [2.76, .35, 2.2], [5.4, .18, 1.2], [8.93, .08, .7]].forEach(function (p) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = f * p[0];
        g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(peak * p[1], at + 0.005);
        g.gain.exponentialRampToValueAtTime(0.0001, Math.min(END, at + p[2]));
        o.connect(g); g.connect(out); g.connect(dl); o.start(at); o.stop(END);
      });
    }
    bell(S, t0 + 3.38, 0.16);
    bell(S * 2, t0 + 0.02, 0.05);                   // tiny chime as the words appear
    out.gain.setValueAtTime(1.1, END - 0.6); out.gain.linearRampToValueAtTime(0.0001, END);
    return out;
  }
  window.vsJingle = vsJingle;

  function startJingle(root, cleanupList) {
    var on = true;
    try { on = (JSON.parse(localStorage.getItem('vedic_settings') || '{}').splashMusic !== false); } catch (e) {}
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!on || !AC) return;
    var ctx;
    try { ctx = new AC(); } catch (e) { return; }
    var played = false, bellBtn = null, node = null;
    function play() {
      if (played) return; played = true;
      if (bellBtn) bellBtn.remove();
      try { node = vsJingle(ctx, ctx.currentTime + 0.05); } catch (e) {}
      setTimeout(function () { try { ctx.close(); } catch (e) {} }, 7000);
    }
    var p = ctx.state === 'running' ? null : ctx.resume();
    setTimeout(function () {
      if (ctx.state === 'running') { play(); return; }
      // The browser blocked sound until the user taps (iPhone always does): offer a bell button.
      bellBtn = document.createElement('button');
      bellBtn.className = 'snd'; bellBtn.setAttribute('aria-label', 'Play music'); bellBtn.textContent = '🔔';
      bellBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        ctx.resume().then(play, function () {});
        if (ctx.state === 'running') play();
      });
      root.appendChild(bellBtn);
    }, 60);
    cleanupList.push(function () {
      if (!played) { try { ctx.close(); } catch (e) {} return; }
      if (node) { var t = ctx.currentTime; node.gain.cancelScheduledValues(t); node.gain.setValueAtTime(node.gain.value, t); node.gain.linearRampToValueAtTime(0.0001, t + 0.9); }
    });
  }

  function run() {
    if (document.getElementById('vs-splash')) return;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var W = window.innerWidth, H = window.innerHeight, small = Math.min(W, H) < 500;

    var css = document.createElement('style');
    css.textContent =
      '#vs-splash{position:fixed;inset:0;z-index:99999;overflow:hidden;cursor:pointer;contain:strict;' +
      'background:radial-gradient(ellipse at 50% 48%,#5a1a08 0%,#2a0a04 55%,#120402 100%)}' +
      '#vs-splash .gl{position:absolute;left:50%;top:50%;width:90vmin;height:90vmin;margin:-45vmin 0 0 -45vmin;border-radius:50%;' +
      'background:radial-gradient(circle,rgba(' + GOLD + ',.32) 0%,rgba(' + GOLD + ',0) 62%);opacity:0;will-change:opacity,transform}' +
      '#vs-splash .wd{position:absolute;left:50%;top:50%;white-space:nowrap;font-weight:600;color:#ffe2a0;' +
      'font-family:"Noto Sans Telugu","Noto Sans Devanagari","Kohinoor Devanagari",serif;' +
      'text-shadow:0 0 8px rgba(' + GOLD + ',.7);opacity:0;will-change:transform,opacity;backface-visibility:hidden}' +
      '#vs-splash .t{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center;pointer-events:none}' +
      '#vs-splash .w{font-family:"Crimson Text",Georgia,serif;font-weight:700;font-size:clamp(2.4rem,11vw,4.2rem);' +
      'color:#fff;letter-spacing:.03em;line-height:1;text-shadow:0 0 18px rgba(' + GOLD + ',.55)}' +
      '#vs-splash .w b{display:inline-block;font-weight:700;opacity:0;will-change:transform,opacity}' +
      '#vs-splash .w b.g{color:#f0c040}' +
      '#vs-splash .s{margin-top:12px;font-family:"Noto Sans Telugu",serif;font-size:clamp(.95rem,4vw,1.2rem);' +
      'color:rgba(240,210,140,.9);letter-spacing:.06em;opacity:0}' +
      '#vs-splash .k{position:absolute;bottom:max(22px,env(safe-area-inset-bottom));left:0;right:0;text-align:center;' +
      'font:12px -apple-system,system-ui,sans-serif;color:rgba(240,220,180,.4);letter-spacing:.12em;text-transform:uppercase}' +
      '#vs-splash .snd{position:absolute;top:max(16px,env(safe-area-inset-top));right:16px;width:44px;height:44px;border-radius:50%;' +
      'border:1px solid rgba(240,192,64,.5);background:rgba(240,192,64,.12);font-size:20px;line-height:42px;padding:0;cursor:pointer;' +
      'animation:vsnd 1.6s ease-in-out infinite}' +
      '@keyframes vsnd{0%,100%{box-shadow:0 0 0 0 rgba(240,192,64,.45)}50%{box-shadow:0 0 0 8px rgba(240,192,64,0)}}';
    document.head.appendChild(css);

    var root = document.createElement('div');
    root.id = 'vs-splash';
    var title = 'Vedasaram';
    var pool = WORDS.slice().sort(function () { return Math.random() - .5; }).slice(0, small ? 20 : 28);
    root.innerHTML = '<div class="gl"></div>' +
      pool.map(function (w) { return '<span class="wd">' + w + '</span>'; }).join('') +
      '<div class="t"><div class="w">' +
      title.split('').map(function (ch, i) { return '<b' + (i >= 4 ? ' class="g"' : '') + '>' + ch + '</b>'; }).join('') +
      '</div><div class="s">వేదసారం · वेदसारम्</div></div><div class="k">Tap to skip</div>';
    document.body.appendChild(root);

    var letters = root.querySelectorAll('.w b'), sub = root.querySelector('.s'), glow = root.querySelector('.gl');
    var anims = [], done = false;
    var cleanups = [];
    startJingle(root, cleanups);
    function A(el, kf, opt) { var a = el.animate(kf, opt); anims.push(a); return a; }
    var smooth = 'cubic-bezier(.45,0,.25,1)';

    function finish() {
      if (done) return;
      done = true;
      cleanups.forEach(function (f) { try { f(); } catch (e) {} });
      anims.forEach(function (a) { try { a.finish(); } catch (e) {} });
      var out = root.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, easing: 'ease', fill: 'forwards' });
      root.style.pointerEvents = 'none';
      out.onfinish = function () { root.remove(); css.remove(); };
      setTimeout(function () { if (root.parentNode) { root.remove(); css.remove(); } }, 1500);
    }
    root.addEventListener('click', finish);

    var GATHER = 1500, ABSORB = 1500, FLY = 900, END;
    if (reduce) {
      for (var r = 0; r < letters.length; r++) letters[r].style.opacity = 1;
      sub.style.opacity = 1;
      setTimeout(finish, 1400);
      return;
    }

    // Words: fade in where they lie, drift a little, then spiral into the title.
    var spans = root.querySelectorAll('.wd'), lastArrive = 0;
    for (var i = 0; i < spans.length; i++) {
      var el = spans[i];
      var sz = (small ? 14 : 17) + Math.random() * (small ? 10 : 14);
      el.style.fontSize = sz + 'px';
      var half = Math.min(el.offsetWidth / 2 + 8, W / 2 - 4), hh = el.offsetHeight / 2;
      var x, y;
      do { y = 40 + Math.random() * (H - 110); } while (Math.abs(y - H / 2) < 75);
      x = half + Math.random() * (W - 2 * half);
      x -= W / 2; y -= H / 2;                       // relative to centre
      var dx = (Math.random() - .5) * 30, dy = (Math.random() - .5) * 24 - 10;
      var born = Math.random() * 700;
      var leave = GATHER + (i / spans.length) * ABSORB + Math.random() * 100;
      var total = leave + FLY;
      var spin = Math.random() < .5 ? -1 : 1;
      var sx = x + dx, sy = y + dy, ang = Math.atan2(sy, sx), dist = Math.hypot(sx, sy);
      var mid = { a: ang + spin * .7, d: dist * .45 };
      function T(px, py, sc, rot) {
        return 'translate3d(' + (px - el.offsetWidth / 2).toFixed(1) + 'px,' + (py - hh).toFixed(1) + 'px,0) scale(' + sc + ') rotate(' + rot + 'deg)';
      }
      var oBorn = born / total, oLeave = leave / total, oMid = (leave + FLY * .55) / total;
      A(el, [
        { offset: 0, transform: T(x, y, 1, 0), opacity: 0 },
        { offset: oBorn, transform: T(x, y, 1, 0), opacity: 0 },
        { offset: Math.min(oBorn + 600 / total, oLeave), opacity: .8 },
        { offset: oLeave, transform: T(sx, sy, 1, 0), opacity: .8, easing: smooth },
        { offset: oMid, transform: T(Math.cos(mid.a) * mid.d, Math.sin(mid.a) * mid.d * .8, .55, spin * 12), opacity: .75, easing: 'cubic-bezier(.4,0,1,1)' },
        { offset: 1, transform: T(0, 0, .12, spin * 20), opacity: 0 }
      ], { duration: total, fill: 'forwards' });
      lastArrive = Math.max(lastArrive, total);
    }

    // Title letters light up as the words arrive.
    for (var L = 0; L < letters.length; L++) {
      var at = GATHER + FLY * .8 + (L / (letters.length - 1)) * (lastArrive - GATHER - FLY * .8);
      A(letters[L], [
        { opacity: 0, transform: 'scale(.4)' },
        { opacity: 1, transform: 'scale(1.12)', offset: .6 },
        { opacity: 1, transform: 'scale(1)' }
      ], { duration: 520, delay: at, easing: 'ease-out', fill: 'forwards' });
    }
    A(glow, [
      { opacity: 0, transform: 'scale(.6)' },
      { opacity: .5, transform: 'scale(.9)', offset: .5 },
      { opacity: 1, transform: 'scale(1)', offset: .85 },
      { opacity: .7, transform: 'scale(1.05)' }
    ], { duration: lastArrive + 600, easing: 'ease-in-out', fill: 'forwards' });
    A(sub, [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }],
      { duration: 700, delay: lastArrive, easing: 'ease-out', fill: 'forwards' });

    END = lastArrive + 1300;
    var out = root.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 700, delay: END, easing: 'ease', fill: 'forwards' });
    out.onfinish = function () { done = true; root.remove(); css.remove(); };
  }

  if (document.body) run(); else document.addEventListener('DOMContentLoaded', run);
})();
