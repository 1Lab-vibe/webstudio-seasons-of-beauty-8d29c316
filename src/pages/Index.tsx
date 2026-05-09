import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Star, MapPin, Phone, Clock, MessageCircle, Scissors, Sparkles, Hand, Eye, Check } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import hairImg from "@/assets/service-hair.jpg";
import faceImg from "@/assets/service-face.jpg";
import browsImg from "@/assets/service-brows.jpg";

const services = [
  {
    icon: Scissors,
    title: "Волосы",
    image: hairImg,
    items: [
      { name: "Женская стрижка", price: "от 2 500 ₽" },
      { name: "Окрашивание в один тон", price: "от 4 500 ₽" },
      { name: "Сложное окрашивание / шатуш", price: "от 8 900 ₽" },
      { name: "Укладка", price: "от 1 800 ₽" },
    ],
  },
  {
    icon: Hand,
    title: "Маникюр и педикюр",
    image: nailsImg,
    items: [
      { name: "Маникюр + покрытие гель-лак", price: "от 2 200 ₽" },
      { name: "Аппаратный педикюр + покрытие", price: "от 3 200 ₽" },
      { name: "Снятие покрытия", price: "от 500 ₽" },
      { name: "Дизайн (1 ноготь)", price: "от 150 ₽" },
    ],
  },
  {
    icon: Sparkles,
    title: "Лицо и уход",
    image: faceImg,
    items: [
      { name: "Чистка лица комбинированная", price: "от 4 500 ₽" },
      { name: "Пилинг / уходовая программа", price: "от 3 800 ₽" },
      { name: "Массаж лица", price: "от 2 500 ₽" },
    ],
  },
  {
    icon: Eye,
    title: "Брови и ресницы",
    image: browsImg,
    items: [
      { name: "Коррекция и окрашивание бровей", price: "от 1 500 ₽" },
      { name: "Ламинирование бровей", price: "от 2 500 ₽" },
      { name: "Ламинирование ресниц", price: "от 2 800 ₽" },
    ],
  },
];

const reviews = [
  { name: "Анна М.", text: "Прекрасный салон в самом центре. Удобно забежать в обед — сделали идеальный маникюр за час. Девочки внимательные, чисто и уютно.", rating: 5 },
  { name: "Екатерина П.", text: "Делала окрашивание у мастера — попали в желаемый оттенок с первого раза. Очень довольна, буду возвращаться.", rating: 5 },
  { name: "Ольга К.", text: "Хожу на брови и уход за лицом. Отношение к клиенту, как к подруге — без навязывания услуг. Спасибо!", rating: 5 },
  { name: "Мария Л.", text: "Локация шикарная — две минуты от метро. Записалась через сайт, перезвонили быстро, всё подтвердили.", rating: 5 },
];

const steps = [
  { n: "01", title: "Оставьте заявку", desc: "Через форму, WhatsApp или по телефону. Подберём удобное время." },
  { n: "02", title: "Подтверждаем запись", desc: "Администратор перезвонит в течение 15 минут в рабочее время." },
  { n: "03", title: "Приходите в салон", desc: "Две минуты пешком от метро Охотный Ряд. Встречаем чаем или кофе." },
  { n: "04", title: "Уходите в хорошем настроении", desc: "Согласуем дату следующего визита, чтобы не выпадать из ритма." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Пожалуйста, укажите имя и телефон");
      return;
    }
    toast.success("Спасибо! Мы перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="font-display text-xl md:text-2xl font-semibold text-primary">
            Seasons <span className="text-accent">of</span> Beauty
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition">Услуги</a>
            <a href="#reviews" className="hover:text-primary transition">Отзывы</a>
            <a href="#process" className="hover:text-primary transition">Как записаться</a>
            <a href="#contacts" className="hover:text-primary transition">Контакты</a>
          </nav>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href="#booking">Записаться</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Интерьер салона красоты Seasons of Beauty" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="container relative z-10 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-xs font-medium text-primary mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Москва, 2 минуты от м. Охотный Ряд
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] mb-6">
              Салон красоты в самом сердце Москвы
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
              Стрижки, окрашивание, маникюр и уход у мастеров с многолетним опытом. Запись онлайн, прозрачные цены, удобный маршрут.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#booking">Записаться онлайн</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/90 backdrop-blur border-background/50 text-primary hover:bg-background">
                <a href="tel:+74951234567"><Phone className="w-4 h-4 mr-2" /> Позвонить</a>
              </Button>
            </div>
            <div className="flex items-center gap-5 text-white/95">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <span className="text-sm">5.0 на Яндекс.Картах · уже 4 отзыва</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-center">
          {[
            { v: "5.0", l: "оценка на Яндекс.Картах" },
            { v: "2 мин", l: "пешком от метро" },
            { v: "10:00–22:00", l: "ежедневно" },
            { v: "15 мин", l: "среднее время ответа" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl md:text-3xl font-semibold text-primary">{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Отзывы</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-primary mb-4">Что говорят клиенты</h2>
            <p className="text-muted-foreground">Реальные отзывы с Яндекс.Карт. Мы ценим каждого, кто к нам приходит.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {reviews.map((r) => (
              <Card key={r.name} className="p-7 border-border shadow-none hover:shadow-[var(--shadow-card)] transition">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-4">«{r.text}»</p>
                <div className="text-sm font-medium text-primary">{r.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Prices */}
      <section id="services" className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Услуги и цены</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-primary mb-4">Прозрачно, без сюрпризов</h2>
            <p className="text-muted-foreground">Финальная стоимость зависит от длины волос и сложности работы — назовём её на консультации перед началом.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="overflow-hidden border-border shadow-[var(--shadow-card)]">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover" width={800} height={450} />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-primary">{s.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {s.items.map((it) => (
                      <li key={it.name} className="flex justify-between gap-4 text-sm border-b border-border last:border-0 pb-3 last:pb-0">
                        <span className="text-foreground">{it.name}</span>
                        <span className="text-muted-foreground whitespace-nowrap">{it.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Как записаться</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-primary mb-4">Четыре простых шага</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="font-display text-5xl text-accent/40 mb-3">{s.n}</div>
                <h3 className="font-semibold text-lg text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section id="booking" className="py-20 md:py-28 bg-secondary/40">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-widest text-accent mb-3">Запись и расчёт</p>
              <h2 className="font-display text-3xl md:text-5xl font-medium text-primary mb-5">Оставьте заявку — перезвоним за 15 минут</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Опишите, какая услуга вас интересует. Подскажем, к какому мастеру записаться, сориентируем по итоговой стоимости и удобному времени.
              </p>
              <ul className="space-y-3">
                {[
                  "Не нужно создавать аккаунт",
                  "Подтверждение в течение 15 минут",
                  "Можно перенести запись в один клик",
                  "Без навязывания дополнительных услуг",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground/90">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-7 md:p-8 shadow-[var(--shadow-soft)] border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Как к вам обращаться</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ваше имя" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="service">Услуга</Label>
                  <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger id="service" className="mt-1.5">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hair">Стрижка / окрашивание</SelectItem>
                      <SelectItem value="nails">Маникюр / педикюр</SelectItem>
                      <SelectItem value="face">Уход за лицом</SelectItem>
                      <SelectItem value="brows">Брови / ресницы</SelectItem>
                      <SelectItem value="other">Другое / консультация</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Удобное время или комментарий</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Например: суббота после 14:00" className="mt-1.5 min-h-[80px]" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Контакты</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-primary mb-4">Найти нас просто</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="space-y-5">
              {[
                { icon: MapPin, title: "Адрес", text: "Москва, ул. Тверская, рядом с метро Охотный Ряд" },
                { icon: Clock, title: "Часы работы", text: "Ежедневно, 10:00 – 22:00" },
                { icon: Phone, title: "Телефон", text: "+7 (495) 123-45-67", href: "tel:+74951234567" },
                { icon: MessageCircle, title: "WhatsApp / Telegram", text: "Напишите нам — отвечаем быстро", href: "https://wa.me/74951234567" },
              ].map((c) => (
                <Card key={c.title} className="p-5 border-border shadow-none">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.title}</div>
                      {c.href ? (
                        <a href={c.href} className="text-foreground hover:text-accent transition font-medium">{c.text}</a>
                      ) : (
                        <div className="text-foreground font-medium">{c.text}</div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
              <Button asChild size="lg" variant="outline" className="w-full">
                <a href="https://yandex.ru/maps/?text=Охотный+Ряд+Москва" target="_blank" rel="noreferrer">
                  Построить маршрут на Яндекс.Картах
                </a>
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden border border-border shadow-[var(--shadow-card)] min-h-[400px]">
              <iframe
                title="Карта проезда"
                src="https://yandex.ru/map-widget/v1/?ll=37.615%2C55.757&z=16&pt=37.615,55.757,pm2rdm"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 bg-secondary/30">
        <div className="container flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-muted-foreground">
          <div className="font-display text-lg text-primary">Seasons <span className="text-accent">of</span> Beauty</div>
          <div>© {new Date().getFullYear()} Все права защищены</div>
          <a href="#booking" className="hover:text-primary transition">Записаться онлайн</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
