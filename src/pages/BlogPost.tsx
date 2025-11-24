import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle } from "lucide-react";

const blogPosts = {
  "chatgpt-plus-yemen": {
    title: "أفضل طريقة للحصول على اشتراك شات جي بي تي بلس في اليمن",
    content: `
      <h2>لماذا تحتاج إلى اشتراك شات جي بي تي بلس في اليمن؟</h2>
      <p>يعتبر اشتراك شات جي بي تي بلس من أهم الأدوات التقنية التي يحتاجها المحترفون والطلاب في اليمن. مع الذكاء الاصطناعي المتقدم، يمكنك الحصول على إجابات دقيقة وسريعة لجميع استفساراتك.</p>
      
      <h3>مميزات اشتراك شات جي بي تي بلس في اليمن:</h3>
      <ul>
        <li>سرعة استجابة فائقة حتى في أوقات الذروة</li>
        <li>إمكانية الوصول إلى أحدث نماذج GPT-4</li>
        <li>أولوية في الاستخدام عند ازدحام الخوادم</li>
        <li>ميزات متقدمة للبرمجة والكتابة</li>
        <li>دعم اللغة العربية بشكل ممتاز</li>
      </ul>

      <h3>كيفية الحصول على اشتراك شات جي بي تي بلس في اليمن:</h3>
      <p>نحن في متجر الاشتراكات الرقمية في اليمن نوفر لك طريقتين للحصول على اشتراك شات جي بي تي بلس:</p>
      
      <h4>1. اشتراك شات جي بي تي - حساب مشترك (4 دولار شهرياً)</h4>
      <p>هذا الخيار مثالي للمستخدمين الذين يريدون تجربة الخدمة بسعر اقتصادي. يتم تفعيل الاشتراك خلال دقائق من الطلب عبر واتساب.</p>

      <h4>2. اشتراك شات جي بي تي - حساب خاص (10 دولار شهرياً)</h4>
      <p>للمستخدمين الذين يريدون خصوصية كاملة، نوفر تفعيل الاشتراك على الإيميل الشخصي للعميل مع ضمان الأمان والخصوصية.</p>

      <h3>لماذا نحن الأفضل لاشتراكات شات جي بي تي في اليمن؟</h3>
      <ul>
        <li>تفعيل فوري خلال دقائق من الطلب</li>
        <li>دعم فني 24/7 عبر واتساب</li>
        <li>أسعار تنافسية ومناسبة للسوق اليمني</li>
        <li>ضمان التفعيل أو استرداد المبلغ</li>
        <li>خبرة أكثر من سنتين في مجال الاشتراكات الرقمية</li>
      </ul>

      <h3>طريقة الطلب:</h3>
      <p>الطلب سهل وبسيط عبر واتساب فقط. اضغط على زر "اطلب عبر واتساب" واختر نوع الاشتراك المناسب لك. سيتم التفعيل خلال دقائق من تأكيد الدفع.</p>

      <h3>أسئلة شائعة حول اشتراك شات جي بي تي بلس في اليمن:</h3>
      <h4>هل يعمل الاشتراك في اليمن؟</h4>
      <p>نعم، جميع اشتراكاتنا تعمل بشكل مثالي في اليمن وجميع الدول العربية.</p>

      <h4>كم يستغرق التفعيل؟</h4>
      <p>التفعيل يتم خلال 5-15 دقيقة من تأكيد الدفع.</p>

      <h4>هل هناك ضمان؟</h4>
      <p>نعم، نوفر ضمان التفعيل أو استرداد المبلغ كاملاً.</p>
    `,
    keywords: "اشتراك شات جي بي تي بلس في اليمن، GPT Plus Yemen، شات جي بي تي اليمن"
  },
  "canva-pro-yemen": {
    title: "كيفية تفعيل اشتراك كانفا برو في اليمن",
    content: `
      <h2>ما هو اشتراك كانفا برو وما أهميته في اليمن؟</h2>
      <p>كانفا برو هو أداة التصميم الأولى عالمياً التي يحتاجها كل مصمم ومسوق ورائد أعمال في اليمن. مع اشتراك كانفا برو، تحصل على إمكانيات تصميم لا محدودة.</p>

      <h3>مميزات اشتراك كانفا برو في اليمن:</h3>
      <ul>
        <li>أكثر من 100 مليون صورة وعنصر تصميم مجاني</li>
        <li>إزالة خلفية الصور بنقرة واحدة</li>
        <li>تصميمات جاهزة لجميع منصات التواصل الاجتماعي</li>
        <li>خطوط عربية احترافية</li>
        <li>تصدير بجودة عالية HD و 4K</li>
        <li>مساحة تخزين سحابية 1 تيرابايت</li>
        <li>إمكانية العمل الجماعي مع الفريق</li>
      </ul>

      <h3>لماذا تحتاج اشتراك كانفا برو في اليمن؟</h3>
      <p>في السوق اليمني المتنامي، التصميم الاحترافي أصبح ضرورة لا غنى عنها. سواء كنت تدير متجراً إلكترونياً، أو تعمل في التسويق الرقمي، أو تدرّس عبر الإنترنت، فإن كانفا برو يوفر لك:</p>

      <ul>
        <li>تصميمات احترافية للمنتجات والخدمات</li>
        <li>محتوى بصري جذاب لوسائل التواصل الاجتماعي</li>
        <li>عروض تقديمية مميزة للعمل والدراسة</li>
        <li>تصميمات طباعة عالية الجودة</li>
      </ul>

      <h3>كيفية الحصول على اشتراك كانفا برو في اليمن:</h3>
      <p>نحن نوفر اشتراك كانفا برو لمدة سنة كاملة بسعر 3 دولار فقط! هذا السعر الاستثنائي يجعل الأدوات الاحترافية في متناول الجميع في اليمن.</p>

      <h4>مقارنة الأسعار:</h4>
      <ul>
        <li>السعر الرسمي لكانفا برو: 120 دولار سنوياً</li>
        <li>سعرنا الخاص لليمن: 3 دولار سنوياً</li>
        <li>توفير يصل إلى 97% من السعر الأصلي!</li>
      </ul>

      <h3>خطوات التفعيل:</h3>
      <ol>
        <li>اضغط على زر "اطلب عبر واتساب"</li>
        <li>أرسل رسالة تطلب فيها اشتراك كانفا برو</li>
        <li>ادفع المبلغ (3 دولار) عبر الطريقة المتفق عليها</li>
        <li>احصل على رابط الدعوة خلال 10 دقائق</li>
        <li>فعّل الاشتراك على حسابك الشخصي</li>
      </ol>

      <h3>نصائح لاستخدام كانفا برو بفعالية في اليمن:</h3>
      <ul>
        <li>استخدم القوالب الجاهزة لتوفير الوقت</li>
        <li>اعتمد على الخطوط العربية المتوفرة</li>
        <li>استفد من مكتبة الصور الضخمة</li>
        <li>جرب ميزة إزالة الخلفية للمنتجات</li>
        <li>احفظ تصميماتك في مجلدات منظمة</li>
      </ul>

      <h3>الدعم الفني:</h3>
      <p>نوفر دعماً فنياً كاملاً باللغة العربية لجميع عملائنا في اليمن. إذا واجهت أي مشكلة في التفعيل أو الاستخدام، تواصل معنا عبر واتساب وسنحل المشكلة فوراً.</p>
    `,
    keywords: "اشتراك كانفا برو في اليمن، Canva Pro Yemen، كانفا اليمن"
  },
  "duolingo-super-yemen": {
    title: "طريقة شراء اشتراك دوولينجو في اليمن",
    content: `
      <h2>أهمية تعلم اللغات في اليمن مع دوولينجو سوبر</h2>
      <p>في عالم اليوم، تعلم اللغات الأجنبية أصبح ضرورة حتمية للنجاح المهني والأكاديمي. دوولينجو سوبر يوفر أفضل تجربة تعليمية تفاعلية للمتعلمين في اليمن.</p>

      <h3>مميزات اشتراك دوولينجو سوبر في اليمن:</h3>
      <ul>
        <li>تعلم بدون إعلانات مزعجة</li>
        <li>قلوب لا محدودة للتعلم المستمر</li>
        <li>إمكانية التعلم دون اتصال بالإنترنت</li>
        <li>اختبارات تقدم شهرية مجانية</li>
        <li>شارات وإنجازات حصرية</li>
        <li>دروس إضافية متقدمة</li>
        <li>تتبع مفصل للتقدم</li>
      </ul>

      <h3>اللغات المتاحة للمتعلمين اليمنيين:</h3>
      <ul>
        <li>الإنجليزية (الأكثر طلباً في اليمن)</li>
        <li>الفرنسية</li>
        <li>الألمانية</li>
        <li>الإسبانية</li>
        <li>الإيطالية</li>
        <li>البرتغالية</li>
        <li>الروسية</li>
        <li>اليابانية</li>
        <li>الكورية</li>
        <li>الصينية</li>
      </ul>

      <h3>لماذا دوولينجو سوبر مهم للشباب اليمني؟</h3>
      <p>في ظل الظروف الاقتصادية في اليمن، تعلم اللغات يفتح أبواب الفرص:</p>

      <ul>
        <li>فرص عمل أفضل مع الشركات الدولية</li>
        <li>إمكانية العمل الحر عبر الإنترنت</li>
        <li>التأهل للمنح الدراسية الخارجية</li>
        <li>تطوير المهارات الشخصية والمهنية</li>
        <li>فهم أفضل للثقافات العالمية</li>
      </ul>

      <h3>مقارنة بين النسخة المجانية ودوولينجو سوبر:</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 12px;">الميزة</th>
          <th style="border: 1px solid #ddd; padding: 12px;">النسخة المجانية</th>
          <th style="border: 1px solid #ddd; padding: 12px;">دوولينجو سوبر</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">الإعلانات</td>
          <td style="border: 1px solid #ddd; padding: 12px;">موجودة</td>
          <td style="border: 1px solid #ddd; padding: 12px;">بدون إعلانات</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">القلوب</td>
          <td style="border: 1px solid #ddd; padding: 12px;">محدودة (5 قلوب)</td>
          <td style="border: 1px solid #ddd; padding: 12px;">لا محدودة</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">التعلم دون إنترنت</td>
          <td style="border: 1px solid #ddd; padding: 12px;">غير متاح</td>
          <td style="border: 1px solid #ddd; padding: 12px;">متاح</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">اختبارات التقدم</td>
          <td style="border: 1px solid #ddd; padding: 12px;">مدفوعة</td>
          <td style="border: 1px solid #ddd; padding: 12px;">مجانية</td>
        </tr>
      </table>

      <h3>كيفية الحصول على اشتراك دوولينجو سوبر في اليمن:</h3>
      <p>نوفر اشتراك دوولينجو سوبر لمدة سنة كاملة بسعر 3 دولار فقط! هذا السعر الاستثنائي يجعل التعلم في متناول جميع الطلاب والمهنيين في اليمن.</p>

      <h4>خطوات الحصول على الاشتراك:</h4>
      <ol>
        <li>تواصل معنا عبر واتساب على الرقم +967738382876</li>
        <li>اطلب اشتراك دوولينجو سوبر لسنة</li>
        <li>ادفع المبلغ (3 دولار) بالطريقة المتفق عليها</li>
        <li>احصل على دعوة العائلة خلال 15 دقيقة</li>
        <li>فعّل الاشتراك على حسابك الشخصي</li>
        <li>ابدأ التعلم فوراً بدون قيود!</li>
      </ol>

      <h3>نصائح لتعلم فعال مع دوولينجو سوبر:</h3>
      <ul>
        <li>حدد هدفاً يومياً واقعياً (10-20 دقيقة)</li>
        <li>استخدم ميزة التذكير اليومي</li>
        <li>مارس اللغة مع الأصدقاء والعائلة</li>
        <li>استفد من القصص التفاعلية</li>
        <li>راجع الدروس السابقة بانتظام</li>
        <li>استخدم ميزة التعلم دون إنترنت في المناطق ضعيفة الشبكة</li>
      </ul>

      <h3>قصص نجاح من اليمن:</h3>
      <p>العديد من الشباب اليمني حققوا نجاحات مميزة بعد تعلم اللغات عبر دوولينجو:</p>
      <ul>
        <li>حصول على وظائف في شركات دولية</li>
        <li>الحصول على منح دراسية في الخارج</li>
        <li>بدء مشاريع تجارية مع عملاء أجانب</li>
        <li>تطوير مهارات الترجمة والكتابة</li>
      </ul>

      <h3>الدعم والمساعدة:</h3>
      <p>فريقنا متاح 24/7 لمساعدتك في أي استفسار حول اشتراك دوولينجو سوبر. نوفر الدعم باللغة العربية ونضمن حل جميع المشاكل التقنية بسرعة.</p>
    `,
    keywords: "اشتراك دوولينجو في اليمن، Duolingo Super Yemen، دوولينجو اليمن"
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
          <Link to="/">
            <Button>العودة للرئيسية</Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = `مرحباً، قرأت مقال "${post.title}" وأريد المزيد من المعلومات`;
  const whatsappUrl = `https://wa.me/967738382876?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              متجر الاشتراكات الرقمية في اليمن
            </Link>
            <Link to="/">
              <Button variant="outline">العودة للرئيسية</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 seo-heading">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>متجر الاشتراكات الرقمية في اليمن</span>
              <span>•</span>
              <span>دليل شامل</span>
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none arabic-text"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              هل تريد البدء الآن؟
            </h3>
            <p className="text-gray-700 mb-6">
              تواصل معنا عبر واتساب للحصول على اشتراكك بأفضل الأسعار وأسرع خدمة في اليمن
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل عبر واتساب
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </article>

        {/* Related Articles */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .map(([key, relatedPost]) => (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <Link to={`/blog/${key}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        اقرأ المقال
                        <ArrowRight className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;