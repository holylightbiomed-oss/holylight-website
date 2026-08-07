:root{
  --ink:#18332e;
  --ink-soft:#405b55;
  --muted:#6d7e79;
  --wine:#8f2040;
  --wine-dark:#6f1730;
  --teal:#0a625d;
  --mint:#e8f4f0;
  --blush:#f8e8ed;
  --cream:#fffaf7;
  --white:#ffffff;
  --line:#dce7e3;
  --shadow:0 24px 70px rgba(23,57,50,.13);
  --radius-xl:34px;
  --radius-lg:24px;
  --radius-md:18px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:"Noto Sans TC",sans-serif;color:var(--ink);background:var(--cream);line-height:1.75}
img{max-width:100%;display:block}
a{color:inherit}
button{font:inherit}
.container{width:min(1160px,calc(100% - 40px));margin:auto}
.skip-link{position:fixed;left:16px;top:-80px;background:#fff;padding:10px 16px;z-index:100;border-radius:10px}
.skip-link:focus{top:16px}

.site-header{position:sticky;top:0;z-index:40;background:rgba(255,250,247,.9);backdrop-filter:blur(16px);border-bottom:1px solid rgba(24,51,46,.08)}
.nav{min-height:88px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.brand{display:flex;align-items:center;gap:13px;text-decoration:none}
.brand img{width:60px;height:60px}
.brand strong{display:block;font-size:1.4rem}
.brand small{display:block;color:var(--muted);letter-spacing:.14em;font-size:.72rem}
.nav-links{display:flex;align-items:center;gap:20px}
.nav-links a{text-decoration:none;font-weight:700}
.nav-cta{padding:10px 18px;border-radius:999px;background:var(--wine);color:#fff}
.menu-toggle{display:none;background:none;border:0;padding:8px}
.menu-toggle span{display:block;width:25px;height:2px;background:var(--ink);margin:5px 0}

.hero{position:relative;overflow:hidden;padding:92px 0 78px;background:
radial-gradient(circle at 80% 20%,rgba(243,203,214,.75),transparent 30%),
linear-gradient(135deg,#fff 0%,#fff7f9 56%,#eef8f5 100%)}
.hero-orb{position:absolute;border-radius:50%;filter:blur(2px);opacity:.75}
.orb-a{width:320px;height:320px;background:#dff2eb;left:-120px;bottom:-120px}
.orb-b{width:180px;height:180px;background:#f5d7e1;right:8%;top:12%}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:64px;align-items:center;position:relative;z-index:2}
.breadcrumb{font-size:.92rem;color:var(--muted)}
.breadcrumb a{text-decoration:none}
.breadcrumb span{margin:0 7px}
.eyebrow{font-family:Manrope,sans-serif;font-weight:800;letter-spacing:.17em;color:var(--wine);margin:0 0 12px}
.eyebrow.light{color:#f4cdd8}
h1{font-size:clamp(3rem,6.8vw,5.7rem);line-height:1.02;margin:.1em 0 .2em;letter-spacing:-.03em}
h2{font-size:clamp(2.1rem,4.2vw,3.35rem);line-height:1.18;margin:.1em 0 .35em;letter-spacing:-.02em}
h3{line-height:1.35}
.tagline{font-size:1.35rem;font-weight:800;color:var(--teal);margin:0 0 8px}
.lead{font-size:1.13rem;color:var(--muted);max-width:660px}
.hero-badges{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0}
.hero-badges span{background:#fff;border:1px solid var(--line);border-radius:999px;padding:9px 15px;font-weight:800}
.hero-badges b{font-family:Manrope,sans-serif;margin-right:2px}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:13px 23px;border-radius:999px;text-decoration:none;font-weight:800;transition:.22s}
.btn.primary{background:var(--wine);color:#fff;box-shadow:0 12px 28px rgba(143,32,64,.22)}
.btn.primary:hover{transform:translateY(-2px);background:var(--wine-dark)}
.btn.ghost{background:#fff;border:1px solid var(--ink)}
.btn.light{background:#fff;color:var(--wine)}
.micro-info{display:flex;flex-wrap:wrap;gap:18px;margin-top:26px;color:var(--muted);font-size:.92rem}

.product-stage{position:relative;min-height:520px;border-radius:42px;background:linear-gradient(155deg,#fff,#edf8f4);box-shadow:var(--shadow);display:grid;place-items:center;padding:48px;overflow:hidden}
.product-stage img{position:relative;z-index:3;max-height:400px;object-fit:contain;filter:drop-shadow(0 24px 24px rgba(0,0,0,.15))}
.bubble{position:absolute;border-radius:50%;border:1px solid rgba(10,98,93,.18);background:rgba(255,255,255,.54);backdrop-filter:blur(4px)}
.bubble-1{width:140px;height:140px;right:8%;top:10%}
.bubble-2{width:72px;height:72px;left:8%;bottom:18%}
.bubble-3{width:40px;height:40px;right:21%;bottom:10%}
.stage-label{position:absolute;z-index:4;left:28px;bottom:24px;padding:13px 16px;border-radius:16px;background:rgba(255,255,255,.86);backdrop-filter:blur(10px)}
.stage-label small{display:block;color:var(--wine);font-family:Manrope,sans-serif;letter-spacing:.14em}
.stage-label strong{font-family:Manrope,sans-serif}

.stats-bar{background:#fff;padding:0}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);transform:translateY(-26px);border:1px solid var(--line);border-radius:24px;background:#fff;box-shadow:var(--shadow);overflow:hidden}
.stats-grid article{padding:24px;border-right:1px solid var(--line)}
.stats-grid article:last-child{border-right:0}
.stats-grid strong{display:block;font-size:1.4rem;font-family:Manrope,sans-serif}
.stats-grid span{color:var(--muted)}

.section{padding:86px 0}
.alt{background:#fff}
.section-head{max-width:760px;margin-bottom:38px}
.section-head>p:last-child{color:var(--muted)}
.premium-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.premium-card,.feature-card,.application-card,.process-card{background:#fff;border:1px solid var(--line);border-radius:var(--radius-lg);padding:28px;transition:.24s}
.premium-card:hover,.feature-card:hover,.application-card:hover,.process-card:hover{transform:translateY(-5px);box-shadow:var(--shadow)}
.icon-shell{width:52px;height:52px;border-radius:16px;background:var(--blush);display:grid;place-items:center;color:var(--wine);font-family:Manrope,sans-serif;font-weight:800}
.premium-card h3{margin:18px 0 8px}
.premium-card p,.feature-card p,.application-card p,.process-card p{color:var(--muted);margin-bottom:0}
.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.feature-card span{color:var(--wine);font-family:Manrope,sans-serif;font-weight:800;letter-spacing:.12em}
.application-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.application-card{min-height:170px;background:linear-gradient(160deg,#fff,#f7fbfa)}
.application-card b{font-size:1.2rem}

.composition-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:50px;align-items:center}
.ingredient-cloud{display:flex;gap:12px;flex-wrap:wrap}
.ingredient-cloud span{padding:14px 18px;border-radius:999px;background:var(--mint);border:1px solid #cfe7df;font-weight:800}

.timeline{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.timeline-step{position:relative;border:1px solid var(--line);background:#fff;border-radius:var(--radius-lg);padding:28px}
.timeline-step:not(:last-child):after{content:"→";position:absolute;right:-15px;top:50%;transform:translateY(-50%);color:var(--wine);font-weight:900;z-index:2}
.step-number{color:var(--wine);font-family:Manrope,sans-serif;font-size:1.55rem;font-weight:800}
.timeline-step p{color:var(--muted);margin-bottom:0}
.care-path{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:34px}
.care-path span{padding:10px 16px;border-radius:999px;background:var(--mint);font-weight:800}
.care-path i{font-style:normal;color:var(--wine);font-weight:900}
.notice{margin-top:24px;border-left:4px solid var(--wine);background:#fff1f5;padding:17px 20px;border-radius:12px;color:#70404d}

.process-compare{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.process-card{padding:34px}
.process-card small{color:var(--wine);font-family:Manrope,sans-serif;letter-spacing:.14em;font-weight:800}
.process-card ol{padding-left:1.2rem;color:var(--ink-soft)}
.process-card.muted{background:var(--mint)}

.product-info{padding-top:0}
.info-panel{display:grid;grid-template-columns:.8fr 1.2fr;gap:44px;background:var(--teal);color:#fff;border-radius:var(--radius-xl);padding:44px}
.info-panel dl{margin:0;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.info-panel dl div{padding:18px;border-radius:16px;background:rgba(255,255,255,.1)}
.info-panel dt{font-size:.85rem;color:#bfe1d9}
.info-panel dd{margin:4px 0 0;font-weight:800}

.download-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.download-card{border:1px solid var(--line);background:#fff;border-radius:var(--radius-lg);padding:28px;text-align:left;cursor:pointer;transition:.22s}
.download-card:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
.download-card span{display:block;color:var(--wine);font-family:Manrope,sans-serif;font-weight:800}
.download-card strong{display:block;font-size:1.15rem;margin:10px 0 4px}
.download-card small{color:var(--muted)}

.faq-layout{display:grid;grid-template-columns:.75fr 1.25fr;gap:50px}
.faq-list details{background:#fff;border:1px solid var(--line);border-radius:16px;padding:18px 20px;margin-bottom:12px}
.faq-list summary{cursor:pointer;font-weight:800}
.faq-list p{color:var(--muted);margin-bottom:0}

.contact-banner{padding:76px 0;background:linear-gradient(135deg,var(--wine),#671429);color:#fff}
.contact-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:36px;align-items:center}
.contact-actions{display:flex;flex-direction:column;gap:14px;align-items:flex-start}
.phone{color:#fff;font-size:1.3rem;font-weight:800}

footer{padding:38px 0;background:#142822;color:#fff}
.footer-grid{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}
.footer-brand{display:flex;align-items:center;gap:12px}
.footer-brand img{width:54px}
.footer-brand strong,.footer-brand span{display:block}
.footer-grid a{color:#fff}

.toast{position:fixed;left:50%;bottom:28px;transform:translate(-50%,30px);background:#172722;color:#fff;padding:12px 18px;border-radius:999px;opacity:0;pointer-events:none;transition:.24s;z-index:100}
.toast.show{opacity:1;transform:translate(-50%,0)}
.back-to-top{position:fixed;right:20px;bottom:20px;width:45px;height:45px;border:0;border-radius:50%;background:var(--wine);color:#fff;font-size:1.2rem;opacity:0;pointer-events:none;transition:.22s;z-index:50}
.back-to-top.show{opacity:1;pointer-events:auto}

.reveal{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease}
.reveal.visible{opacity:1;transform:none}
.delay-1{transition-delay:.08s}.delay-2{transition-delay:.16s}.delay-3{transition-delay:.24s}

@media(max-width:980px){
  .nav-links{position:absolute;left:20px;right:20px;top:78px;display:none;flex-direction:column;align-items:stretch;background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px;box-shadow:var(--shadow)}
  .nav-links.open{display:flex}
  .menu-toggle{display:block}
  .hero-grid,.composition-grid,.faq-layout,.contact-grid,.info-panel{grid-template-columns:1fr}
  .premium-grid{grid-template-columns:1fr 1fr}
  .feature-grid,.application-grid{grid-template-columns:1fr 1fr}
  .timeline{grid-template-columns:1fr 1fr}
  .timeline-step:after{display:none}
  .download-grid{grid-template-columns:1fr 1fr}
  .product-stage{min-height:420px}
}
@media(max-width:640px){
  .container{width:min(100% - 28px,1160px)}
  .brand img{width:50px;height:50px}
  .brand strong{font-size:1.15rem}
  .brand small{font-size:.61rem}
  .hero{padding-top:58px}
  .premium-grid,.feature-grid,.application-grid,.timeline,.process-compare,.download-grid,.stats-grid,.info-panel dl{grid-template-columns:1fr}
  .stats-grid article{border-right:0;border-bottom:1px solid var(--line)}
  .stats-grid article:last-child{border-bottom:0}
  .product-stage{min-height:330px;padding:26px}
  .product-stage img{max-height:270px}
  .hero-badges{display:grid;grid-template-columns:1fr 1fr}
  .care-path{display:grid}
  .care-path i{text-align:center;transform:rotate(90deg)}
  .info-panel{padding:28px}
}
@media(prefers-reduced-motion:reduce){
  *{scroll-behavior:auto!important}
  .reveal{opacity:1;transform:none;transition:none}
}

/* Barrier Film V5.2 */
.barrier-hero{background:radial-gradient(circle at 82% 18%,rgba(219,232,255,.72),transparent 30%),linear-gradient(135deg,#fff 0%,#f7f9ff 56%,#eef8f5 100%)}
.barrier-stage{background:linear-gradient(155deg,#fff,#eef3ff)}
.film-ring{position:absolute;border-radius:50%;border:1px solid rgba(91,110,180,.2);background:rgba(255,255,255,.28);backdrop-filter:blur(3px)}
.ring-1{width:250px;height:250px;right:-45px;top:30px;animation:ringFloatOne 7s ease-in-out infinite}
.ring-2{width:145px;height:145px;left:20px;bottom:60px;animation:ringFloatTwo 5.4s ease-in-out infinite}
.ring-3{width:70px;height:70px;right:70px;bottom:38px;animation:ringFloatOne 4.2s ease-in-out infinite reverse}
.barrier-stage img{animation:barrierProductFloat 4.6s ease-in-out infinite}
@keyframes barrierProductFloat{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-13px) rotate(-.7deg)}}
@keyframes ringFloatOne{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-12px,-16px) scale(1.04)}}
@keyframes ringFloatTwo{0%,100%{transform:translate(0,0)}50%{transform:translate(10px,-13px)}}
@media(prefers-reduced-motion:reduce){.barrier-stage img,.ring-1,.ring-2,.ring-3{animation:none}}
