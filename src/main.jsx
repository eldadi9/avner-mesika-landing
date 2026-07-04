import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  Award,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Gem,
  Hammer,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  PenLine,
  Phone,
  Send,
  Star,
  X,
} from "lucide-react";
import "./styles.css";

const phone = "052-3644377";
const plainPhone = "0523644377";
const email = "avnerm62@gmail.com";
const telHref = "tel:+972523644377";
const whatsappHref =
  "https://wa.me/972523644377?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%91%D7%A0%D7%A8%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A5%20%D7%9C%D7%92%D7%91%D7%99%20%D7%AA%D7%9B%D7%A9%D7%99%D7%98%20%D7%91%D7%94%D7%AA%D7%90%D7%9E%D7%94%20%D7%90%D7%99%D7%A9%D7%99%D7%AA.";

const asset = (name) => `/assets/${name}`;

const photos = {
  blackGold: asset("46258117_2050428261684818_4655286035335348224_n.jpg"),
  weddingBand: asset("476235215_9240915292636043_386417310268482851_n.jpg"),
  braidedBand: asset("476887985_9240915315969374_4246425564939490757_n.jpg"),
  amberRing: asset("514482992_24006152619019067_822904740483834179_n.jpg"),
  workshop: asset("58933214_2287489341312041_3162585445989089280_n.jpg"),
  testimonial: asset("653706412_26257289883905318_6701338360474286187_n.jpg"),
  goldSet: asset("654627188_26287953570838949_7962220073410761400_n.jpg"),
  tableWork: asset("69244246_2497759653618341_6108013076294926336_n.jpg"),
  tools: asset("atelier-tools-clean.png"),
};

const navItems = [
  ["בית", "top"],
  ["אודות", "about"],
  ["השירותים", "services"],
  ["גלריה", "gallery"],
  ["טבעות אירוסין", "custom-rings"],
  ["תיקונים ושחזורים", "repairs"],
  ["יצירת קשר", "contact"],
];

const trustItems = [
  ["מעל 30 שנות ניסיון", "ניסיון עשיר בצורפות, שיבוץ וגימור ידני מוקפד.", Award],
  ["עבודת יד מלאה", "כל תכשיט נוצר בסטודיו באופן אישי, ללא ייצור המוני.", Hammer],
  ["ליווי אישי וישיר", "אתם מדברים עם הצורף שיוצר את התכשיט שלכם.", HeartHandshake],
];

const services = [
  ["עיצוב תכשיטים בהתאמה אישית", "יצירת תכשיט ייחודי לפי סגנון, רעיון, תמונה או צורך אישי.", photos.blackGold],
  ["טבעות אירוסין", "טבעת אחת ויחידה, שנבנית במיוחד עבור הרגע החשוב שלכם.", photos.amberRing],
  ["טבעות נישואין", "עיצוב זוג טבעות אישי, נקי, מדויק ועל-זמני.", photos.braidedBand],
  ["תיקונים ושחזורים", "תיקון מקצועי לתכשיטים אהובים תוך שמירה על האופי המקורי שלהם.", photos.tableWork],
  ["שיבוץ אבנים", "שיבוץ מדויק של יהלומים, אבני חן ואבנים מיוחדות.", photos.goldSet],
  ["חריטות, ציפויים וליטוש", "גימור עדין, ניקוי, הברקה והחזרת הברק המקורי לתכשיט.", photos.tools],
];

const process = [
  ["1", "פגישת היכרות", "שיחה אישית להבנת הסגנון, התקציב, הרעיון והחלום."],
  ["2", "אפיון ועיצוב", "תרגום הרעיון לקונספט עיצובי ברור ומדויק."],
  ["3", "בחירת חומרים", "בחירת מתכות, אבנים, גימורים ופרטים אישיים."],
  ["4", "עבודת יד", "יצירת התכשיט בסטודיו בעבודת צורפות מקצועית."],
  ["5", "שיבוץ וגימור", "שיבוץ מדויק, ליטוש, חריטה וגימור מוקפד."],
  ["6", "מסירה", "קבלת תכשיט ייחודי שנוצר במיוחד עבורכם."],
];

const gallery = [
  ["טבעת חותם בעבודת יד", photos.blackGold],
  ["טבעת נישואין מזהב", photos.weddingBand],
  ["טבעת נישואין בעיצוב אישי", photos.braidedBand],
  ["טבעת אבן בעיצוב אישי", photos.amberRing],
  ["עבודת סטודיו ותכשיטים", photos.workshop],
  ["תכשיטים שעברו חידוש", photos.testimonial],
  ["סט תכשיטי זהב", photos.goldSet],
  ["עבודת צורפות על שולחן העבודה", photos.tableWork],
  ["כלי צורפות ותכשיט בעבודת יד", photos.tools],
];

const testimonials = [
  {
    name: "מיכל ל׳",
    text: "אבנר הבין בדיוק מה רצינו, ליווה אותנו בסבלנות ויצר טבעת מושלמת. מרגישים שזו עבודת יד אמיתית.",
  },
  {
    name: "דניאל ר׳",
    text: "הגעתי עם תכשיט ישן שהיה חשוב לי מאוד, ואבנר החזיר אותו לחיים בצורה מרגשת ומדויקת.",
  },
  {
    name: "יעל ש׳",
    text: "שירות אישי, עבודה נקייה ותוצאה הרבה מעבר למה שדמיינו. הכל נעשה ברוגע, במקצועיות ובטעם מצוין.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [slider, setSlider] = useState(50);
  const [confirmed, setConfirmed] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submitAppointment = (event) => {
    event.preventDefault();
    setConfirmed(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <header className="site-nav">
        <button className="icon-btn mobile-menu" onClick={() => setMenuOpen(true)} aria-label="פתיחת תפריט">
          <Menu size={22} />
        </button>
        <button className="brand" onClick={() => goTo("top")} aria-label="AVNER MESIKA עמוד הבית">
          <span className="monogram">AM</span>
          <span className="brand-name">AVNER MESIKA</span>
          <small>Jewelry Artist · Handcrafted Fine Jewelry</small>
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="ניווט ראשי">
          <button className="icon-btn close-menu" onClick={() => setMenuOpen(false)} aria-label="סגירת תפריט">
            <X size={22} />
          </button>
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)}>
              {label}
            </button>
          ))}
        </nav>
        <button className="nav-cta" onClick={() => goTo("appointment")}>
          לתיאום פגישה
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image">
            <img src={photos.amberRing} alt="טבעת אבן בעבודת יד של אבנר מסיקה" />
          </div>
          <div className="hero-content">
            <span className="eyebrow">צורף אומן · עבודת יד · עיצוב אישי · שירות אישי</span>
            <h1>תכשיטים בעבודת יד שנוצרים במיוחד בשבילכם</h1>
            <p>
              מעל 30 שנות ניסיון בצורפות, עיצוב תכשיטים בהתאמה אישית, טבעות אירוסין ונישואין,
              תיקונים, שיבוצים ושחזור תכשיטים — הכל בעבודת יד וברמת גימור גבוהה.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href={telHref}>
                <Phone size={18} /> התקשרו עכשיו
              </a>
              <button className="btn ghost" onClick={() => goTo("appointment")}>
                <CalendarDays size={18} /> לתיאום פגישה אישית
              </button>
            </div>
            <strong className="phone-line">{phone}</strong>
          </div>
          <button className="scroll-indicator" onClick={() => goTo("about")} aria-label="גלילה לאודות">
            <ArrowDown size={22} />
          </button>
        </section>

        <section className="section trust" id="about">
          <div className="section-heading center">
            <span className="eyebrow">אמנות, ניסיון ותשומת לב אישית</span>
            <h2>למה לבחור באבנר מסיקה?</h2>
            <p>
              כשיוצרים תכשיט בעבודת יד, כל פרט חשוב. מהרעיון הראשון ועד הגימור האחרון —
              אבנר מלווה אתכם בתהליך אישי, מדויק ומקצועי.
            </p>
          </div>
          <div className="trust-grid">
            {trustItems.map(([title, text, Icon]) => (
              <article className="trust-card" key={title}>
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-heading">
            <span className="eyebrow">השירותים שלנו</span>
            <h2>כל שירות מבוצע בהתאמה אישית ובגימור מוקפד.</h2>
            <p>
              כל תכשיט צריך להיות מדויק, איכותי ובעל משמעות. בסטודיו של אבנר מסיקה כל עבודה
              מקבלת יחס אישי, מקצועי ומלא סבלנות.
            </p>
          </div>
          <div className="service-bento">
            {services.map(([title, text, src], index) => (
              <article className={index === 0 ? "service-card feature" : "service-card"} key={title}>
                {index === 0 && <img src={src} alt={`${title} של אבנר מסיקה`} loading="lazy" />}
                <div>
                  <Gem size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="philosophy">
          <img src={photos.tools} alt="שולחן עבודה יוקרתי של צורף עם כלי צורפות וטבעת זהב" loading="lazy" />
          <div>
            <span className="eyebrow">כל תכשיט מספר סיפור</span>
            <h2>תכשיט טוב הוא לא מוצר מדף. הוא זיכרון, רגע, רגש ונוכחות.</h2>
            <p>
              בסטודיו של אבנר מסיקה כל תכשיט נוצר בעבודת יד, מתוך הקשבה לרצון הלקוח,
              התאמה אישית ותשומת לב לפרטים הקטנים ביותר.
            </p>
          </div>
        </section>

        <section className="section custom" id="custom-rings">
          <div className="custom-media">
            <img src={photos.amberRing} alt="טבעת אירוסין או טבעת אבן בעיצוב אישי בעבודת יד" loading="lazy" />
          </div>
          <div className="custom-copy">
            <span className="eyebrow">יצירה אחת ויחידה שנבנית במיוחד בשבילכם</span>
            <h2>טבעות אירוסין בעיצוב אישי</h2>
            <p>
              בחירת טבעת אירוסין היא רגע שמסמל התחלה חדשה. בעולם של ייצור המוני, טבעת בעיצוב
              אישי מאפשרת ליצור פריט שמספר סיפור ונבנה בדיוק לפי הסגנון, הטעם והאופי שלכם.
            </p>
            <a className="text-link" href={telHref}>
              לתיאום פגישת עיצוב אישית
            </a>
          </div>
        </section>

        <section className="section process">
          <div className="section-heading center">
            <span className="eyebrow">תהליך עבודה אישי</span>
            <h2>איך התהליך עובד?</h2>
          </div>
          <div className="timeline">
            {process.map(([num, title, text]) => (
              <article key={title}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section repair" id="repairs">
          <div className="repair-copy">
            <span className="eyebrow">תיקונים, חידושים ושחזורים</span>
            <h2>לפעמים התכשיט שכבר יש לכם רק צריך יד מקצועית שתחזיר לו את החיים.</h2>
            <p>
              תיקון תכשיטים, חידוש, שיבוץ אבנים, ניקוי וליטוש, שדרוג תכשיט קיים ושחזור מתמונה —
              הכל נעשה בזהירות ובכבוד לפריט המקורי.
            </p>
            <a className="text-link" href={whatsappHref}>שלחו תמונה לבדיקה ראשונית</a>
          </div>
          <div className="compare" style={{ "--position": `${slider}%` }}>
            <img className="after" src={photos.braidedBand} alt="טבעת לאחר חידוש וגימור" loading="lazy" />
            <img className="before" src={photos.weddingBand} alt="טבעת לפני עבודת חידוש" loading="lazy" />
            <input
              type="range"
              min="0"
              max="100"
              value={slider}
              aria-label="השוואת לפני ואחרי חידוש תכשיט"
              onChange={(event) => setSlider(event.target.value)}
            />
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="section-heading center">
            <span className="eyebrow">גלריית עבודות</span>
            <h2>תכשיטים בעבודת יד מהסטודיו של אבנר מסיקה.</h2>
          </div>
          <div className="masonry">
            {gallery.map(([category, src], index) => (
              <button className={`gallery-item item-${(index % 5) + 1}`} key={category} onClick={() => setLightbox(index)}>
                <img src={src} alt={`${category} - עבודת יד של אבנר מסיקה`} loading="lazy" />
                <span>{category}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-heading center">
            <span className="eyebrow">לקוחות מספרים</span>
            <h2>שירות אישי, עבודה נקייה ותכשיטים שנשארים לכל החיים.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="stars" aria-label="דירוג חמישה כוכבים">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
                <p>“{item.text}”</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section story">
          <div className="story-copy">
            <span className="eyebrow">אודות אבנר</span>
            <h2>מעל 30 שנות ניסיון בצורפות, סבלנות ודיוק.</h2>
            <p>
              אבנר מסיקה הוא צורף אומן ומעצב תכשיטים בהתאמה אישית. כל לקוח מקבל ליווי אישי,
              ייעוץ מקצועי ועבודת סטודיו שמכבדת גם את הרגש וגם את החומר.
            </p>
          </div>
          <div className="story-media">
            <img src={photos.workshop} alt="עבודת צורפות ותכשיטים בסטודיו של אבנר מסיקה" loading="lazy" />
            <img src={photos.tableWork} alt="תכשיטים על שולחן עבודה בתהליך צורפות" loading="lazy" />
          </div>
        </section>

        <section className="section appointment" id="appointment">
          <div>
            <span className="eyebrow">קביעת פגישה אישית</span>
            <h2>בואו ניצור יחד את התכשיט שתמיד רציתם</h2>
            <p>השאירו פרטים, שלחו הודעה או התקשרו ישירות לאבנר לתיאום פגישה אישית.</p>
          </div>
          <form className="booking-form" onSubmit={submitAppointment}>
            <label>
              שם מלא
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              טלפון
              <input name="phone" required autoComplete="tel" />
            </label>
            <label>
              אימייל
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label>
              תאריך מועדף לפגישה
              <input name="date" type="date" />
            </label>
            <label className="full">
              איך אפשר לעזור?
              <textarea name="message" rows="3" />
            </label>
            <button className="btn primary full" type="submit">
              <Send size={18} /> שליחת פנייה
            </button>
            {confirmed && <p className="confirmation">תודה, הפנייה נשלחה בהצלחה. אבנר יחזור אליכם בהקדם.</p>}
          </form>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-panel">
            <span className="eyebrow">יצירת קשר</span>
            <h2>דברו ישירות עם אבנר.</h2>
            <div className="contact-list">
              <a href={telHref}>
                <Phone size={21} /> {plainPhone}
              </a>
              <a href={`mailto:${email}`}>
                <Mail size={21} /> {email}
              </a>
              <span>
                <MapPin size={21} /> ביקור בסטודיו בתיאום פגישה אישית
              </span>
            </div>
          </div>
          <div className="contact-card">
            <PenLine size={28} />
            <span>תכשיטים בהתאמה אישית</span>
            <strong>תיקונים · שחזורים · טבעות אירוסין</strong>
          </div>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand">
          <span className="monogram">AM</span>
          <span className="brand-name">AVNER MESIKA</span>
          <small>Jewelry Artist · Handcrafted Fine Jewelry</small>
        </div>
        <div className="footer-contact">
          <a href={telHref}>{plainPhone}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <p>
          אבנר מסיקה — צורף אומן עם מעל 30 שנות ניסיון בעיצוב תכשיטים בעבודת יד, טבעות אירוסין,
          טבעות נישואין, תיקונים, שיבוצים ושחזור תכשיטים.
        </p>
        <p>כל הזכויות שמורות לאבנר מסיקה</p>
      </footer>

      <nav className="bottom-contact" aria-label="יצירת קשר מהירה">
        <a href={telHref}>
          <Phone size={18} /> התקשרו
        </a>
        <a href={whatsappHref}>
          <Send size={18} /> וואטסאפ
        </a>
        <button onClick={() => goTo("appointment")}>
          <CalendarDays size={18} /> פגישה
        </button>
      </nav>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="תמונה מהגלריה">
          <button className="icon-btn close-lightbox" onClick={() => setLightbox(null)} aria-label="סגירת גלריה">
            <X size={25} />
          </button>
          <button className="light-arrow left" onClick={() => setLightbox((lightbox + gallery.length - 1) % gallery.length)} aria-label="תמונה קודמת">
            <ChevronLeft size={34} />
          </button>
          <img src={gallery[lightbox][1]} alt={gallery[lightbox][0]} />
          <span>{gallery[lightbox][0]}</span>
          <button className="light-arrow right" onClick={() => setLightbox((lightbox + 1) % gallery.length)} aria-label="תמונה הבאה">
            <ChevronRight size={34} />
          </button>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
