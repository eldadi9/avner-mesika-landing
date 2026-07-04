import React, { useEffect, useRef, useState } from "react";
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

const appointmentWebhookUrl = "https://n8n.srv1282987.hstgr.cloud/webhook/avner-appointment";

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.017 2C6.478 2 2 6.477 2 12.017c0 1.87.51 3.678 1.474 5.267L2 22l4.858-1.446A9.96 9.96 0 0 0 12.017 22C17.556 22 22 17.523 22 11.983 22 6.443 17.556 2 12.017 2zm0 18.05a8.01 8.01 0 0 1-4.084-1.117l-.293-.174-3.03.902.91-2.955-.19-.303A8.02 8.02 0 0 1 4.02 12c0-4.42 3.59-8 8-8 4.41 0 8 3.58 8 8 0 4.42-3.59 8.05-8.003 8.05z" />
  </svg>
);

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

const photoDimensions = {
  [photos.blackGold]: { width: 1080, height: 1425 },
  [photos.weddingBand]: { width: 723, height: 960 },
  [photos.braidedBand]: { width: 897, height: 960 },
  [photos.amberRing]: { width: 1220, height: 1627 },
  [photos.workshop]: { width: 1063, height: 1141 },
  [photos.testimonial]: { width: 1211, height: 1131 },
  [photos.goldSet]: { width: 1219, height: 1633 },
  [photos.tableWork]: { width: 718, height: 960 },
  [photos.tools]: { width: 1652, height: 952 },
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

const weekdayLabels = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];
const monthLabels = [
  "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
  "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר",
];

const pad2 = (value) => String(value).padStart(2, "0");
const formatDateDMY = (date) => `${pad2(date.getDate())}/${pad2(date.getMonth() + 1)}/${date.getFullYear()}`;
const toISODate = (date) => `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;

function DatePickerField({ name }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [viewDate, setViewDate] = useState(() => new Date());
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 1) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cells = [];
  for (let i = 0; i < startOffset; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);

  const changeMonth = (delta) => {
    setViewDate(new Date(year, month + delta, 1));
  };

  const pickDay = (day) => {
    const picked = new Date(year, month, day);
    if (picked < today) return;
    setSelected(picked);
    setOpen(false);
  };

  return (
    <div className="date-field" ref={wrapperRef}>
      <input
        type="text"
        readOnly
        placeholder="DD/MM/YYYY"
        value={selected ? formatDateDMY(selected) : ""}
        onClick={() => setOpen((value) => !value)}
      />
      <input type="hidden" name={name} value={selected ? toISODate(selected) : ""} />
      {open && (
        <div className="date-popover" role="dialog" aria-label="בחירת תאריך">
          <div className="date-popover-head">
            <button type="button" onClick={() => changeMonth(1)} aria-label="חודש הבא">
              <ChevronRight size={18} />
            </button>
            <strong>{monthLabels[month]} {year}</strong>
            <button type="button" onClick={() => changeMonth(-1)} aria-label="חודש קודם">
              <ChevronLeft size={18} />
            </button>
          </div>
          <div className="date-popover-weekdays">
            {weekdayLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <div className="date-popover-grid">
            {cells.map((day, index) => {
              if (day === null) return <span key={`empty-${index}`} />;
              const cellDate = new Date(year, month, day);
              const isPast = cellDate < today;
              const isSelected =
                selected &&
                selected.getFullYear() === year &&
                selected.getMonth() === month &&
                selected.getDate() === day;
              return (
                <button
                  type="button"
                  key={day}
                  className={isSelected ? "selected" : ""}
                  disabled={isPast}
                  onClick={() => pickDay(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [slider, setSlider] = useState(50);
  const [confirmed, setConfirmed] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightbox((current) => (current !== null ? null : current));
        setMenuOpen((current) => (current ? false : current));
        return;
      }
      if (event.key === "ArrowRight") {
        setLightbox((current) => (current === null ? current : (current + gallery.length - 1) % gallery.length));
      }
      if (event.key === "ArrowLeft") {
        setLightbox((current) => (current === null ? current : (current + 1) % gallery.length));
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  const submitAppointment = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setSendError(false);
    try {
      const response = await fetch(appointmentWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${data.get("firstName")} ${data.get("lastName")}`.trim(),
          phone: data.get("phone"),
          email: data.get("email"),
          date: data.get("date"),
          message: data.get("message"),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setConfirmed(true);
      form.reset();
    } catch (error) {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <header className="site-nav">
        <button className="icon-btn mobile-menu" onClick={() => setMenuOpen(true)} aria-label="פתיחת תפריט">
          <Menu size={22} />
        </button>
        <button className="brand" onClick={() => goTo("top")}>
          <span className="monogram" aria-hidden="true">AM</span>
          <span className="brand-text">
            <span className="brand-name">AVNER MESIKA</span>
            <small>Jewelry Artist · Handcrafted Fine Jewelry</small>
          </span>
        </button>
        {menuOpen && (
          <button
            className="nav-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-label="סגירת תפריט"
            tabIndex={-1}
          />
        )}
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="ניווט ראשי">
          <button
            className="icon-btn close-menu"
            onClick={() => setMenuOpen(false)}
            aria-label="סגירת תפריט"
            autoFocus={menuOpen}
          >
            <X size={22} />
          </button>
          <span className="nav-links-brand">AVNER MESIKA</span>
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)}>
              {label}
            </button>
          ))}
          <a className="nav-links-cta" href={telHref}>
            <Phone size={16} /> {phone}
          </a>
        </nav>
        <button className="nav-cta" onClick={() => goTo("appointment-form")}>
          לתיאום פגישה
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image">
            <img
              src={photos.amberRing}
              alt="טבעת אבן בעבודת יד של אבנר מסיקה"
              width={photoDimensions[photos.amberRing].width}
              height={photoDimensions[photos.amberRing].height}
              fetchPriority="high"
            />
          </div>
          <div className="hero-content reveal">
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
              <button className="btn ghost" onClick={() => goTo("appointment-form")}>
                <CalendarDays size={18} /> לתיאום פגישה אישית
              </button>
            </div>
            <strong className="phone-line">{phone}</strong>
            <ul className="hero-trust">
              <li>
                <Award size={16} /> מעל 30 שנות ניסיון
              </li>
              <li>
                <Hammer size={16} /> עבודת יד מלאה
              </li>
              <li>
                <HeartHandshake size={16} /> ליווי אישי וישיר
              </li>
            </ul>
          </div>
          <button className="scroll-indicator" onClick={() => goTo("about")} aria-label="גלילה לאודות">
            <ArrowDown size={22} />
          </button>
        </section>

        <section className="section trust" id="about">
          <div className="section-heading center">
            <span className="eyebrow">אמנות, ניסיון ותשומת לב אישית</span>
            <h2>אמנות הצורפות שמאחורי כל תכשיט</h2>
            <p>
              כשיוצרים תכשיט בעבודת יד, כל פרט חשוב. מהרעיון הראשון ועד הגימור האחרון —
              אבנר מלווה אתכם בתהליך אישי, מדויק ומקצועי.
            </p>
          </div>
          <div className="trust-grid">
            {trustItems.map(([title, text, Icon]) => (
              <article className="trust-card reveal" key={title}>
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
              <article
                className={index === 0 ? "service-card feature reveal" : "service-card reveal"}
                key={title}
              >
                {index === 0 && (
                  <img
                    src={src}
                    alt={`${title} של אבנר מסיקה`}
                    loading="lazy"
                    width={photoDimensions[src].width}
                    height={photoDimensions[src].height}
                  />
                )}
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
          <img
            src={photos.tools}
            alt="שולחן עבודה יוקרתי של צורף עם כלי צורפות וטבעת זהב"
            loading="lazy"
            width={photoDimensions[photos.tools].width}
            height={photoDimensions[photos.tools].height}
          />
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
            <img
              src={photos.amberRing}
              alt="טבעת אירוסין או טבעת אבן בעיצוב אישי בעבודת יד"
              loading="lazy"
              width={photoDimensions[photos.amberRing].width}
              height={photoDimensions[photos.amberRing].height}
            />
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
              <article className="reveal" key={title}>
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
            <img
              className="after"
              src={photos.braidedBand}
              alt="טבעת לאחר חידוש וגימור"
              loading="lazy"
              width={photoDimensions[photos.braidedBand].width}
              height={photoDimensions[photos.braidedBand].height}
            />
            <img
              className="before"
              src={photos.weddingBand}
              alt="טבעת לפני עבודת חידוש"
              loading="lazy"
              width={photoDimensions[photos.weddingBand].width}
              height={photoDimensions[photos.weddingBand].height}
            />
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
              <button
                className={`gallery-item item-${(index % 5) + 1} reveal`}
                key={category}
                onClick={() => setLightbox(index)}
              >
                <img
                  src={src}
                  alt={`${category} - עבודת יד של אבנר מסיקה`}
                  loading="lazy"
                  width={photoDimensions[src].width}
                  height={photoDimensions[src].height}
                />
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
              <article className="testimonial-card reveal" key={item.name}>
                <span className="quote-mark" aria-hidden="true">“</span>
                <div className="stars" role="img" aria-label="דירוג חמישה כוכבים">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <p>{item.text}</p>
                <div className="testimonial-author">
                  <span className="avatar-monogram" aria-hidden="true">
                    {item.name.trim().charAt(0)}
                  </span>
                  <strong>{item.name}</strong>
                </div>
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
            <img
              src={photos.workshop}
              alt="עבודת צורפות ותכשיטים בסטודיו של אבנר מסיקה"
              loading="lazy"
              width={photoDimensions[photos.workshop].width}
              height={photoDimensions[photos.workshop].height}
            />
            <img
              src={photos.tableWork}
              alt="תכשיטים על שולחן עבודה בתהליך צורפות"
              loading="lazy"
              width={photoDimensions[photos.tableWork].width}
              height={photoDimensions[photos.tableWork].height}
            />
          </div>
        </section>

        <section className="section appointment" id="appointment">
          <div>
            <span className="eyebrow">קביעת פגישה אישית</span>
            <h2>בואו ניצור יחד את התכשיט שתמיד רציתם</h2>
            <p>השאירו פרטים, שלחו הודעה או התקשרו ישירות לאבנר לתיאום פגישה אישית.</p>
          </div>
          <form id="appointment-form" className="booking-form" onSubmit={submitAppointment}>
            <label>
              שם פרטי
              <input name="firstName" required autoComplete="given-name" />
            </label>
            <label>
              שם משפחה
              <input name="lastName" required autoComplete="family-name" />
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
              <DatePickerField name="date" />
            </label>
            <label className="full">
              איך אפשר לעזור?
              <textarea name="message" rows="3" />
            </label>
            <button className="btn primary full" type="submit" disabled={sending}>
              <Send size={18} /> {sending ? "שולח..." : "שליחת פנייה"}
            </button>
            <p className="form-note full">אבנר עונה אישית לכל פנייה, בדרך כלל באותו היום.</p>
            {confirmed && <p className="confirmation">תודה, הפנייה נשלחה בהצלחה. אבנר יחזור אליכם בהקדם.</p>}
            {sendError && (
              <p className="confirmation error">
                אירעה שגיאה בשליחה. אפשר להתקשר או לשלוח הודעת וואטסאפ ישירות לאבנר.
              </p>
            )}
          </form>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-panel">
            <span className="eyebrow">יצירת קשר</span>
            <h2>דברו ישירות עם אבנר.</h2>
            <p className="contact-lead">
              בלי מענה אוטומטי ובלי מוקד שירות — כל פנייה מגיעה ישירות לאבנר, והוא זה שעונה.
            </p>
            <div className="contact-cta-row">
              <a className="btn primary" href={telHref}>
                <Phone size={18} /> התקשרו עכשיו
              </a>
              <a className="btn whatsapp" href={whatsappHref}>
                <WhatsAppIcon size={18} /> וואטסאפ
              </a>
            </div>
            <div className="contact-list">
              <a href={telHref}>
                <Phone size={19} /> {plainPhone}
              </a>
              <a href={`mailto:${email}`}>
                <Mail size={19} /> {email}
              </a>
              <span>
                <MapPin size={19} /> ביקור בסטודיו בתיאום פגישה אישית
              </span>
            </div>
          </div>
          <div className="contact-card">
            <PenLine size={28} />
            <span>תכשיטים בהתאמה אישית</span>
            <strong>תיקונים · שחזורים · טבעות אירוסין</strong>
            <ul className="contact-card-trust">
              <li>מענה אישי תוך זמן קצר</li>
              <li>ייעוץ ראשוני ללא התחייבות</li>
              <li>תיאום פגישה בסטודיו או מרחוק</li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand">
          <span className="monogram">AM</span>
          <span className="brand-text">
            <span className="brand-name">AVNER MESIKA</span>
            <small>Jewelry Artist · Handcrafted Fine Jewelry</small>
          </span>
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
          <WhatsAppIcon size={18} /> וואטסאפ
        </a>
        <button onClick={() => goTo("appointment-form")}>
          <CalendarDays size={18} /> פגישה
        </button>
      </nav>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="תמונה מהגלריה">
          <button className="icon-btn close-lightbox" onClick={() => setLightbox(null)} aria-label="סגירת גלריה" autoFocus>
            <X size={25} />
          </button>
          <button className="light-arrow left" onClick={() => setLightbox((lightbox + gallery.length - 1) % gallery.length)} aria-label="תמונה קודמת">
            <ChevronLeft size={34} />
          </button>
          <img
            src={gallery[lightbox][1]}
            alt={gallery[lightbox][0]}
            width={photoDimensions[gallery[lightbox][1]].width}
            height={photoDimensions[gallery[lightbox][1]].height}
          />
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
