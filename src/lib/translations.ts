export const translations = {
  en: {
    nav: {
      progress: "Progress",
      chapters: [
        'Intro',
        'Before the Hype',
        'What Changed',
        'What AI Is',
        'Where It Helps',
        'Limitations',
        'Takeaway'
      ]
    },
    intro: {
      title: "AI",
      subtitle1: "The Rise",
      subtitle2: "Without Hype",
      p1: "AI didn't appear overnight.",
      p2: "It didn't wake up.",
      p3: "And it doesn't think like humans."
    },
    chapter1: {
      label: "Chapter 1",
      title: "Before the Hype",
      p1: "For decades, AI was boring. Really boring.",
      p2: "Researchers toiled away in labs while the world ignored them. What they built wasn't intelligent in the way we think about it — it was clever, but fundamentally limited.",
      timeline: [
        {
          year: '1950s',
          title: 'Rule-Based Systems',
          description: 'AI was literally if-then statements. "If temperature > 40, turn on fan." Not learning, just following rules humans wrote.',
        },
        {
          year: '1980s',
          title: 'Expert Systems',
          description: 'Attempts to capture human expertise in specific domains like medicine. Good at narrow tasks, terrible at anything else.',
        },
        {
          year: '1990s–2000s',
          title: 'Early Machine Learning',
          description: 'Algorithms that could learn from data, but needed humans to hand-craft the patterns they should look for.',
        },
        {
          year: '2010s',
          title: 'Quiet Progress',
          description: 'Incremental improvements. Not headlines. Just researchers making things slightly better, year after year.',
        },
      ],
      summary: "AI was boring for decades — and that's important."
    },
    chapter2: {
      label: "Chapter 2",
      title: "What Changed",
      p1: "Three things converged. Not magic — just the right ingredients at the right time.",
      cards: [
        {
          title: 'Data',
          description: 'The internet created massive datasets. Text, images, sound — more than any team could label by hand.',
        },
        {
          title: 'Compute',
          description: 'GPUs, originally for gaming, turned out to be perfect for the math behind neural networks.',
        },
        {
          title: 'Algorithms',
          description: 'Better architectures and training methods. Still fundamentally pattern matching, just at scale.',
        },
      ],
      scaleTitle: "The Power of Scale",
      scaleDesc: "More data → better patterns. Not understanding, just more examples to learn from."
    },
    chapter3: {
      label: "Chapter 3",
      title: "What AI Is (And Is Not)",
      p1: "Let's kill the biggest myths. No hype. No fear. Just what's actually happening under the hood.",
      myths: [
        {
          myth: '"AI thinks like humans"',
          reality: 'AI doesn\'t have a brain. It has a giant map of data. When you ask it a question, it doesn\'t "think"—it just looks at its map and finds the most likely answer. It\'s more like a very smart calculator for words and images than a human mind.',
        },
        {
          myth: '"AI has intentions"',
          reality: 'AI responds to inputs. It doesn\'t want anything. It doesn\'t have goals or desires. It\'s a function: input → pattern match → output.',
        },
        {
          myth: '"AI is aware"',
          reality: 'There is no consciousness, no subjective experience. The system processes mathematical operations. The feeling of intelligence comes from us, not it.',
        },
        {
          myth: '"AI understands meaning"',
          reality: 'AI learns which words usually go together. Like a super-advanced version of the "Autocomplete" on your phone. It doesn\'t grasp concepts the way humans do.',
        },
      ],
      summaryTitle: "AI predicts — it doesn't think.",
      summaryDesc: "This distinction matters. It changes how we use it, how we trust it, and what we expect from it."
    },
    chapter4: {
      label: "Chapter 4",
      title: "Where AI Actually Helps",
      p1: "Forget the sci-fi. Here's what AI does well today, in real applications, helping real people.",
      cards: [
        {
          id: 'medical',
          title: 'Medical Imaging',
          description: 'AI can spot patterns in X-rays and MRIs that humans might miss. Not replacing doctors — giving them another tool.',
          expanded: 'Studies show AI-assisted radiology can detect certain cancers earlier. But it gets things wrong too. That\'s why human oversight remains essential. The AI suggests; humans decide.',
        },
        {
          id: 'translation',
          title: 'Translation',
          description: 'Real-time translation breaks down language barriers. Not perfect, but good enough for communication.',
          expanded: 'Modern translation systems handle context better than ever before. But they still struggle with idioms, cultural nuances, and specialized terminology. Use it for communication, not legal documents.',
        },
        {
          id: 'recommendations',
          title: 'Recommendations',
          description: 'Netflix, Spotify, Amazon — systems that learn your preferences. Convenient, but also creates filter bubbles.',
          expanded: 'These systems are great at surface-level preferences but can reinforce existing biases. You might never discover something outside your comfort zone. It\'s worth occasionally breaking the algorithm.',
        },
        {
          id: 'accessibility',
          title: 'Accessibility',
          description: 'Image descriptions for the blind, speech-to-text for the deaf, predictive text for those with motor impairments.',
          expanded: 'This is where AI shines. For millions of people, AI-powered accessibility tools make the digital world navigable. It\'s not flashy, but it matters deeply.',
        },
      ]
    },
    chapter5: {
      label: "Chapter 5",
      title: "The Limitations",
      p1: "Understanding AI's limitations is more important than understanding its capabilities. This is how we use it wisely.",
      cards: [
        {
          title: 'Bias',
          description: 'AI learns from human-generated data, which contains human biases. It can amplify discrimination in hiring, lending, and policing.',
          example: 'If you train AI on historical hiring data, it learns historical biases. More men hired → AI prefers men. Not because men are better, because that\'s what the data shows.',
        },
        {
          title: 'Hallucinations',
          description: 'AI can sometimes "make up" facts confidently. It\'s not lying on purpose; it\'s just guessing the next word based on patterns, even if that word is wrong.',
          example: 'Ask an AI about a non-existent historical event, and it might invent details, dates, and quotes with complete confidence. It\'s not lying — it\'s hallucinating patterns that feel true.',
        },
        {
          title: 'Data Dependence',
          description: 'AI is only as good as its training data. No data → no AI. Bad data → bad AI. This constrains what it can do.',
          example: 'An AI trained only on English text can\'t speak Swahili. An AI trained on medical images can\'t predict stock prices. Each model is narrowly bounded by its training.',
        },
        {
          title: 'Lack of Common Sense',
          description: 'AI doesn\'t understand the world the way humans do. It misses context, irony, and obvious things.',
          example: 'Tell an AI "The trophy doesn\'t fit in the suitcase because it\'s too small," and it might not know what "it" refers to. Humans know instantly; AI struggles with what we take for granted.',
        },
      ],
      summary: "These limitations aren't bugs to be fixed. They're fundamental to how AI works. Knowing them makes you smarter than most people talking about AI today."
    },
    final: {
      label: "Final Chapter",
      title: "The Takeaway",
      cards: [
        { title: "AI is a tool.", desc: "" },
        { title: "Powerful.", desc: "It can augment human capabilities in ways we're still discovering." },
        { title: "Imperfect.", desc: "It makes mistakes, has biases, and lacks understanding." },
        { title: "Shaped by humans.", desc: "The data, the objectives, the applications — all decided by people." }
      ],
      mainText: "The future of AI isn't about what \nAI becomes.\nIt's about what we become \nwith it.",
      footer: "Built with clarity, not hype."
    },
    author: {
      name: "Muhammad Imran",
      title: "Software Engineer | AI Systems Architect",
      quote: '"The best way to predict the future is to build it."',
      linkedin: "LinkedIn",
      email: "Email",
      footer: "Designed & Engineered with Purpose by Muhammad Imran"
    }
  },
  ur: {
    nav: {
      progress: "پیشرفت",
      chapters: [
        'تعارف',
        'ہائپ سے پہلے',
        'کیا تبدیل ہوا',
        'AI کیا ہے',
        'یہ کہاں مدد کرتا ہے',
        'حدود',
        'نتیجہ'
      ]
    },
    intro: {
      title: "AI",
      subtitle1: "کا عروج",
      subtitle2: "بغیر کسی بناوٹی شہرت (Hype) کے",
      p1: "AI راتوں رات ظاہر نہیں ہوئی۔",
      p2: "یہ جاگی نہیں ہے۔",
      p3: "اور یہ انسانوں کی طرح نہیں سوچتی۔"
    },
    chapter1: {
      label: "باب 1",
      title: "بناوٹی شہرت (Hype) سے پہلے",
      p1: "کئی دہائیوں تک، AI بورنگ تھی۔ واقعی بورنگ۔",
      p2: "محققین لیبز میں محنت کرتے رہے جبکہ دنیا نے انہیں نظر انداز کیا۔ انہوں نے جو بنایا وہ اس طرح ذہین نہیں تھا جیسا کہ ہم سوچتے ہیں — یہ ہوشیار تھا، لیکن بنیادی طور پر محدود۔",
      timeline: [
        {
          year: '1950 کی دہائی',
          title: 'اصولوں پر مبنی نظام',
          description: 'AI لفظی طور پر اگر-پھر بیانات تھی۔ "اگر درجہ حرارت > 40 ہے، تو پنکھا چلا دیں۔" سیکھنا نہیں، صرف انسانوں کے لکھے ہوئے اصولوں پر عمل کرنا۔',
        },
        {
          year: '1980 کی دہائی',
          title: 'ماہر نظام',
          description: 'طب جیسے مخصوص شعبوں میں انسانی مہارت کو حاصل کرنے کی کوششیں۔ تنگ کاموں میں اچھا، باقی ہر چیز میں خوفناک۔',
        },
        {
          year: '1990-2000 کی دہائی',
          title: 'ابتدائی مشین لرننگ',
          description: 'کام کرنے کا طریقہ (Algorithms) جو ڈیٹا سے سیکھ سکتے تھے، لیکن انسانوں کو ان نمونوں کو ہاتھ سے تیار کرنے کی ضرورت تھی جن کی انہیں تلاش کرنی چاہیے۔',
        },
        {
          year: '2010 کی دہائی',
          title: 'خاموش پیشرفت',
          description: 'تدریجی بہتری۔ سرخیاں نہیں۔ بس محققین چیزوں کو سال بہ سال تھوڑا بہتر بنا رہے ہیں۔',
        },
      ],
      summary: "AI کئی دہائیوں تک بورنگ تھی — اور یہ اہم ہے۔"
    },
    chapter2: {
      label: "باب 2",
      title: "کیا تبدیل ہوا",
      p1: "تین چیزیں اکٹھی ہوئیں۔ جادو نہیں — بس صحیح وقت پر صحیح اجزاء۔",
      cards: [
        {
          title: 'ڈیٹا',
          description: 'انٹرنیٹ نے بڑے پیمانے پر ڈیٹاسیٹس بنائے۔ متن، تصاویر، آواز — اس سے زیادہ جو کوئی بھی ٹیم ہاتھ سے لیبل کر سکتی تھی۔',
        },
        {
          title: 'کمپیوٹ',
          description: 'بجلی اور مشینوں کی طاقت (Compute) — GPUs، جو اصل میں گیمنگ کے لیے تھے، نیورل نیٹ ورکس کے پیچھے ریاضی کے لیے بہترین ثابت ہوئے۔',
        },
        {
          title: 'الگورتھم',
          description: 'بہتر فن تعمیر اور تربیت کے طریقے۔ اب بھی بنیادی طور پر نمونوں کی پہچان (Pattern Matching)، صرف بڑے پیمانے پر۔',
        },
      ],
      scaleTitle: "پیمانے کی طاقت",
      scaleDesc: "زیادہ ڈیٹا → بہتر پیٹرن۔ سمجھنا نہیں، صرف سیکھنے کے لیے مزید مثالیں۔"
    },
    chapter3: {
      label: "باب 3",
      title: "AI کیا ہے (اور کیا نہیں ہے)",
      p1: "آئیے سب سے بڑی خرافات کو ختم کریں۔ کوئی بناوٹی شہرت (Hype) نہیں۔ کوئی خوف نہیں۔ بس جو اصل میں ہڈ کے نیچے ہو رہا ہے۔",
      myths: [
        {
          myth: '"AI انسانوں کی طرح سوچتی ہے"',
          reality: 'AI کے پاس انسانی دماغ نہیں ہے۔ اس کے پاس ڈیٹا کا ایک بہت بڑا نقشہ ہے۔ جب آپ اس سے کوئی سوال پوچھتے ہیں، تو یہ "سوچتی" نہیں ہے—بلکہ یہ اپنے نقشے میں سب سے زیادہ ممکنہ جواب تلاش کرتی ہے۔ یہ ذہن سے زیادہ ایک بہت ہی سمجھدار کیلکولیٹر کی طرح ہے۔',
        },
        {
          myth: '"AI کے ارادے ہیں"',
          reality: 'AI ان پٹ کا جواب دیتی ہے۔ یہ کچھ نہیں چاہتی۔ اس کے کوئی مقاصد یا خواہشات نہیں ہیں۔ یہ ایک فنکشن ہے: ان پٹ → نمونوں کی پہچان (Pattern Match) → آؤٹ پٹ۔',
        },
        {
          myth: '"AI باخبر ہے"',
          reality: 'کوئی شعور نہیں ہے، کوئی ساپیکش تجربہ نہیں ہے۔ نظام ریاضیاتی کارروائیوں پر عمل کرتا ہے۔ ذہانت کا احساس ہم سے آتا ہے، اس سے نہیں۔',
        },
        {
          myth: '"AI معنی سمجھتی ہے"',
          reality: 'AI سیکھتی ہے کہ کون سے الفاظ عام طور پر ایک ساتھ آتے ہیں۔ جیسے آپ کے فون پر "Autocomplete" کا ایک بہت ہی جدید ورژن۔ یہ تصورات کو اس طرح نہیں سمجھتی جیسے انسان کرتے ہیں۔',
        },
      ],
      summaryTitle: "AI پیش گوئی کرتی ہے — یہ سوچتی نہیں ہے۔",
      summaryDesc: "یہ فرق اہمیت رکھتا ہے۔ یہ بدلتا ہے کہ ہم اسے کیسے استعمال کرتے ہیں، ہم اس پر کیسے بھروسہ کرتے ہیں، اور ہم اس سے کیا توقع کرتے ہیں۔"
    },
    chapter4: {
      label: "باب 4",
      title: "جہاں AI اصل میں مدد کرتی ہے",
      p1: "سائنس فکشن کو بھول جائیں۔ یہاں وہ ہے جو AI آج اچھا کرتی ہے، حقیقی ایپلی کیشنز میں، حقیقی لوگوں کی مدد کرنا۔",
      cards: [
        {
          id: 'medical',
          title: 'میڈیکل امیجنگ',
          description: 'AI ایکس رے اور ایم آر آئی میں ایسے پیٹرن دیکھ سکتی ہے جو انسانوں سے چھوٹ سکتے ہیں۔ ڈاکٹروں کی جگہ نہیں لے رہی — انہیں ایک اور ٹول دے رہی ہے۔',
          expanded: 'مطالعہ سے پتہ چلتا ہے کہ AI کی مدد سے ریڈیولاجی بعض کینسروں کا پہلے پتہ لگا سکتی ہے۔ لیکن یہ چیزیں غلط بھی کرتی ہے۔ اسی لیے انسانی نگرانی ضروری ہے۔ AI تجویز کرتی ہے؛ انسان فیصلہ کرتے ہیں۔',
        },
        {
          id: 'translation',
          title: 'ترجمہ',
          description: 'ریئل ٹائم ترجمہ زبان کی رکاوٹوں کو توڑتا ہے۔ کامل نہیں، لیکن مواصلات کے لیے کافی اچھا ہے۔',
          expanded: 'جدید ترجمہ کے نظام سیاق و سباق کو پہلے سے کہیں بہتر سنبھالتے ہیں۔ لیکن وہ اب بھی محاوروں، ثقافتی باریکیوں اور خصوصی اصطلاحات کے ساتھ جدوجہد کرتے ہیں۔ اسے مواصلات کے لیے استعمال کریں، قانونی دستاویزات کے لیے نہیں۔',
        },
        {
          id: 'recommendations',
          title: 'سفارشات',
          description: 'نیٹ فلکس، اسپاٹائف، ایمیزون — وہ نظام جو آپ کی ترجیحات سیکھتے ہیں۔ آسان، لیکن فلٹر بلبلے بھی بناتا ہے۔',
          expanded: 'یہ نظام سطحی ترجیحات میں بہت اچھے ہیں لیکن موجودہ تعصبات کو مضبوط کر سکتے ہیں۔ آپ شاید کبھی اپنے کمفرٹ زون سے باہر کچھ دریافت نہ کریں۔ الگورتھم کو کبھی کبھار توڑنا قابل قدر ہے۔',
        },
        {
          id: 'accessibility',
          title: 'رسائی',
          description: 'نابینا افراد کے لیے تصویر کی تفصیل، بہروں کے لیے اسپیچ ٹو ٹیکسٹ، موٹر خرابی والے افراد کے لیے پیش گوئی کرنے والا متن۔',
          expanded: 'یہ وہ جگہ ہے جہاں AI چمکتی ہے۔ لاکھوں لوگوں کے لیے، AI سے چلنے والے رسائی کے ٹولز ڈیجیٹل دنیا کو قابلِ نیویگیشن بناتے ہیں۔ یہ چمکدار نہیں ہے، لیکن یہ گہرا اثر رکھتا ہے۔',
        },
      ]
    },
    chapter5: {
      label: "باب 5",
      title: "حدود",
      p1: "AI کی حدود کو سمجھنا اس کی صلاحیتوں کو سمجھنے سے زیادہ اہم ہے۔ اس طرح ہم اسے دانشمندی سے استعمال کرتے ہیں۔",
      cards: [
        {
          title: 'تعصب',
          description: 'AI انسانی تخلیق کردہ ڈیٹا سے سیکھتی ہے، جس میں انسانی تعصبات ہوتے ہیں۔ یہ خدمات حاصل کرنے، قرض دینے اور پولیسنگ میں امتیازی سلوک کو بڑھا سکتی ہے۔',
          example: 'اگر آپ AI کو تاریخی خدمات حاصل کرنے والے ڈیٹا پر تربیت دیتے ہیں، تو یہ تاریخی تعصبات سیکھتی ہے۔ زیادہ مردوں کو رکھا گیا → AI مردوں کو ترجیح دیتی ہے۔ اس لیے نہیں کہ مرد بہتر ہیں، اس لیے کہ ڈیٹا یہی دکھاتا ہے۔',
        },
        {
          title: 'خوش فہمی یا غلط بیانی (Hallucinations)',
          description: 'AI اعتماد کے ساتھ غلط معلومات پیدا کر سکتی ہے۔ یہ حقائق کو "نہیں جانتی"؛ یہ ممکنہ آواز والے متن کی پیش گوئی کرتی ہے۔',
          example: 'AI سے کسی غیر موجود تاریخی واقعے کے بارے میں پوچھیں، اور یہ مکمل اعتماد کے ساتھ تفصیلات، تاریخیں اور اقتباسات ایجاد کر سکتی ہے۔ یہ جھوٹ نہیں بول رہی — یہ ایسے پیٹرن کو خوش فہمی (Hallucinating) میں دیکھ رہی ہے جو سچ محسوس ہوتے ہیں۔',
        },
        {
          title: 'ڈیٹا پر انحصار',
          description: 'AI صرف اتنا ہی اچھا ہے جتنا اس کا تربیتی ڈیٹا۔ کوئی ڈیٹا نہیں → کوئی AI نہیں۔ برا ڈیٹا → برا AI۔ یہ اس بات کو محدود کرتا ہے کہ یہ کیا کر سکتی ہے۔',
          example: 'صرف انگریزی متن پر تربیت یافتہ AI سواحلی نہیں بول سکتی۔ طبی تصاویر پر تربیت یافتہ AI اسٹاک کی قیمتوں کی پیش گوئی نہیں کر سکتی۔ ہر ماڈل اپنی تربیت سے محدود ہے۔',
        },
        {
          title: 'کامن سینس کی کمی',
          description: 'AI دنیا کو اس طرح نہیں سمجھتی جیسے انسان کرتے ہیں۔ یہ سیاق و سباق، طنز اور واضح چیزوں کو یاد کرتی ہے۔',
          example: 'AI کو بتائیں "ٹرافی سوٹ کیس میں فٹ نہیں ہوتی کیونکہ یہ بہت چھوٹی ہے،" اور اسے شاید معلوم نہ ہو کہ "یہ" کس کی طرف اشارہ کرتا ہے۔ انسان فوراً جانتے ہیں؛ AI اس کے ساتھ جدوجہد کرتی ہے جسے ہم معمولی سمجھتے ہیں۔',
        },
      ],
      summary: "یہ حدود ٹھیک کرنے کے لیے کیڑے نہیں ہیں۔ یہ بنیادی ہیں کہ AI کیسے کام کرتی ہے۔ انہیں جاننا آپ کو آج AI کے بارے میں بات کرنے والے زیادہ تر لوگوں سے زیادہ ہوشیار بناتا ہے۔"
    },
    final: {
      label: "آخری باب",
      title: "نتیجہ",
      cards: [
        { title: "AI ایک ٹول ہے۔", desc: "" },
        { title: "طاقتور۔", desc: "یہ انسانی صلاحیتوں کو ان طریقوں سے بڑھا سکتا ہے جو ہم ابھی دریافت کر رہے ہیں۔" },
        { title: "نامکمل۔", desc: "یہ غلطیاں کرتا ہے، تعصبات رکھتا ہے، اور سمجھ کی کمی ہے۔" },
        { title: "انسانوں کی طرف سے تشکیل دیا گیا۔", desc: "ڈیٹا، مقاصد، ایپلی کیشنز — سب لوگوں نے فیصلہ کیا۔" }
      ],
      mainText: "AI کا مستقبل اس بارے میں نہیں ہے کہ AI کیا بنتی ہے۔\nیہ اس بارے میں ہے کہ ہم اس کے ساتھ کیا بنتے ہیں۔",
      footer: "وضاحت کے ساتھ بنایا گیا، بناوٹی شہرت (Hype) کے ساتھ نہیں۔"
    },
    author: {
      name: "محمد عمران",
      title: "سافٹ ویئر انجینئر | AI سسٹمز آرکیٹیکٹ",
      quote: '"مستقبل کی پیش گوئی کرنے کا بہترین طریقہ اسے خود تعمیر کرنا ہے۔"',
      linkedin: "لنکڈ ان",
      email: "ای میل",
      footer: "محمد عمران کے ذریعہ مقصد کے ساتھ ڈیزائن اور انجینئر کیا گیا"
    }
  }
}

