import { useState } from "react";
import { Star, MapPin, Phone, Clock, Instagram, Send, Check, Scissors, Sparkles, Hand, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroSalon from "@/assets/hero-salon.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceManicure from "@/assets/service-manicure.jpg";
import serviceFace from "@/assets/service-face.jpg";
import serviceBrows from "@/assets/service-brows.jpg";

const services = [
  {
    icon: Scissors,
    title: "Волосы",
    items: [
      { name: "Женская стрижка", price: "от 2 500 ₽" },
      { name: "Окрашивание в один тон", price: "от 4 500 ₽" },
      { name: "Сложное окрашивание", price: "от 8 000 ₽" },
      { name: "Укладка / вечерняя причёска", price: "от 2 000 ₽" },
    ],
    image: serviceHair,
  },
  {
    icon: Hand,
    title: "Маникюр и педикюр",
    items: [
      { name: "Маникюр с покрытием", price: "от 2 200 ₽" },
      { name: "Аппаратный педикюр", price: "от 2 800 ₽" },
      { name: "Снятие + покрытие", price: "от 1 800 ₽" },
      { name: "Дизайн (1 ноготь)", price: "от 150 ₽" },
    ],
    image: serviceManicure,
  },
  {
    icon: Sparkles,
    title: "Лицо и косметология",
    items: [
      { name: "Чистка лица", price: "от 4 000 ₽" },
      { name: "Уходовая программа", price: "от 3 500 ₽" },
      { name: "Пилинг", price: "от 4 500 ₽" },
      { name: "Массаж лица", price: "от 2 500 ₽" },
    ],
    image: serviceFace,
  },
  {
    icon: Eye,
    title: "Брови и ресницы",
    items: [
      { name: "Коррекция и окрашивание бровей", price: "от 1 500 ₽" },
      { name: "Ламинирование бровей", price: "от 2 500 ₽" },
      { name: "Ламинирование ресниц", price: "от 3 000 ₽" },
      { name: "Наращивание ресниц", price: "от 3 500 ₽" },
    ],
    image: serviceBrows,
  },
];

const reviews = [
  {
    name: "Анна К.",
    text: "Прекрасный салон в самом центре. Делала окрашивание — мастер подобрала идеальный оттенок, всё аккуратно и без спешки. Вернусь обязательно.",
  },
  {
    name: "Мария С.",
    text: "Зашла на маникюр между встречами — приняли вовремя, сделали быстро и очень аккуратно. Уютная атмосфера, приятные цены для центра.",
  },
  {
    name: "Екатерина В.",
    text: "Хожу на брови только сюда. Чистота, внимание к деталям, мастер слышит, что хочешь. Локация — мечта, две минуты от метро.",
  },
  {
    name: "Ольга Р.",
    text: "Сделали укладку перед мероприятием — держалась весь вечер. Спасибо за внимательное отношение и аккуратность.",
  },
];

const steps = [
  { n: "01", title: "Заявка", text: "Оставляете заявку или звоните — подтвердим время в течение 15 минут." },
  { n: "02", title: "Подбор мастера", text: "Уточняем ваши пожелания и подбираем подходящего специалиста." },
  { n: "03", title: "Визит", text: "Приходите за 5 минут до записи. Чай, кофе и комфортная атмосфера." },
  { n: "04", title: "Результат", text: "Уходите с результатом, который нравится. Рекомендации по уходу — в подарок." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", note: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка отправлена! Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", service: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="font-display text-2xl font-semibold tracking-tight">
            Seasons <span className="text-rose">of</span> Beauty
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">Отзывы</a>
            <a href="#process" className="hover:text-foreground transition-colors">Как мы работаем</a>
            <a href="#contacts" className="hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href="#booking">Записаться</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16">
        <div className="container grid gap-12 py-12 md:grid-cols-2 md:py-24 md:gap-8">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-2 text-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-muted-foreground">5,0 на Яндекс Картах</span>
            </div>
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
              Салон красоты
              <br />
              <span className="italic text-rose">в сердце Москвы</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Стрижки, окрашивание, маникюр, брови и косметология. Две минуты пешком
              от метро Охотный Ряд. Запись онлайн, прозрачные цены, мастера с опытом 5+ лет.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full text-base">
                <a href="#booking">Записаться онлайн</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base">
                <a href="tel:+74951234567">
                  <Phone className="mr-2 h-4 w-4" /> +7 (495) 123-45-67
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-rose" /> Без предоплаты</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-rose" /> Подтверждение за 15 минут</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-rose" /> Каждый день 10:00–22:00</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-warm" />
            <img
              src={heroSalon}
              alt="Интерьер салона красоты Seasons of Beauty в Москве"
              width={1600}
              height={1200}
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -left-6 max-w-[260px] rounded-2xl bg-card p-5 shadow-soft md:-left-10">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="h-4 w-4 text-rose" /> Охотный Ряд, 2 мин
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                ул. Тверская, 3 · Москва, м. Охотный Ряд / Театральная
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            { v: "5,0★", l: "На Яндекс Картах" },
            { v: "5+ лет", l: "Опыт мастеров" },
            { v: "2 мин", l: "От метро Охотный Ряд" },
            { v: "10–22", l: "Без выходных" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl font-semibold md:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm uppercase tracking-widest text-rose">Услуги и цены</span>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
            Понятные цены, без сюрпризов
          </h2>
          <p className="mt-4 text-muted-foreground">
            Финальная стоимость зависит от длины и густоты волос, состояния кожи и сложности работы.
            Мастер согласует цену до начала процедуры.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:shadow-elegant">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/95 backdrop-blur">
                  <s.icon className="h-5 w-5 text-rose" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                <ul className="mt-4 divide-y divide-border">
                  {s.items.map((i) => (
                    <li key={i.name} className="flex items-center justify-between py-2.5 text-sm">
                      <span>{i.name}</span>
                      <span className="font-medium text-foreground">{i.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-gradient-warm py-20 md:py-28">
        <div className="container">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-sm uppercase tracking-widest text-rose">Отзывы</span>
              <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
                Нам доверяют постоянные клиенты
              </h2>
            </div>
            <a
              href="https://yandex.ru/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-card px-5 py-3 shadow-soft transition-all hover:shadow-elegant"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-medium">5,0 — Яндекс Карты</span>
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-2xl bg-card p-6 shadow-soft">
                <div className="mb-3 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/80">
                  «{r.text}»
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="container py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm uppercase tracking-widest text-rose">Как мы работаем</span>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
            От заявки до результата — 4 шага
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="font-display text-5xl font-light text-rose/60">{s.n}</div>
              <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm uppercase tracking-widest text-rose">Запись</span>
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
              Оставьте заявку — <br />перезвоним за 15 минут
            </h2>
            <p className="mt-5 max-w-md text-primary-foreground/70">
              Подтвердим удобное время, ответим на вопросы по услугам и стоимости.
              Без навязчивых звонков и предоплат.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-rose" /> +7 (495) 123-45-67</div>
              <div className="flex items-center gap-3"><Send className="h-4 w-4 text-rose" /> @seasonsofbeauty</div>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-rose" /> Ежедневно, 10:00–22:00</div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-card p-6 text-card-foreground shadow-elegant md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Ваше имя</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Анна"
                  className="h-12"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Телефон</label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="h-12"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Услуга</label>
                <Input
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  placeholder="Например: маникюр с покрытием"
                  className="h-12"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Комментарий</label>
                <Textarea
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="Удобное время, пожелания"
                  rows={3}
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full text-base">
                Записаться
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Нажимая «Записаться», вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm uppercase tracking-widest text-rose">Контакты</span>
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
              Найдёте нас за 2 минуты
            </h2>
            <p className="mt-4 text-muted-foreground">
              Мы в самом центре Москвы — рядом с Манежной площадью, между метро Охотный Ряд
              и Театральная. Удобно зайти до работы, в обед или после прогулки по Тверской.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-rose" />
                <div>
                  <div className="font-medium">Адрес</div>
                  <div className="text-sm text-muted-foreground">ул. Тверская, 3, Москва</div>
                  <div className="text-sm text-muted-foreground">м. Охотный Ряд / Театральная</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-rose" />
                <div>
                  <div className="font-medium">Телефон</div>
                  <a href="tel:+74951234567" className="text-sm text-muted-foreground hover:text-foreground">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-rose" />
                <div>
                  <div className="font-medium">Часы работы</div>
                  <div className="text-sm text-muted-foreground">Ежедневно 10:00 – 22:00</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram className="mt-1 h-5 w-5 shrink-0 text-rose" />
                <div>
                  <div className="font-medium">Соцсети</div>
                  <div className="text-sm text-muted-foreground">@seasonsofbeauty</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Seasons of Beauty на карте"
              src="https://yandex.ru/map-widget/v1/?ll=37.615%2C55.757&z=16&pt=37.615,55.757,pm2rdm"
              className="h-[420px] w-full lg:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/40">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="font-display text-lg text-foreground">Seasons of Beauty</div>
          <div>© {new Date().getFullYear()} · Москва, ул. Тверская, 3</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
