import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Star, CheckCircle, Clock, Shield, Zap, ArrowRight, Users, Award, Headphones } from "lucide-react";

const Index = () => {
  const whatsappNumber = "967738382876";
  
  const products = [
    {
      id: 1,
      nameAr: "اشتراك شات جي بي تي – حساب مشترك – شهر",
      nameEn: "GPT Shared Account – 1 Month",
      price: "4",
      currency: "USD",
      description: "احصل على اشتراك شات جي بي تي بلس في اليمن بأفضل سعر. تفعيل فوري وضمان الجودة.",
      features: [
        "تفعيل خلال 5 دقائق",
        "اشتراك شات جي بي تي بلس في اليمن",
        "دعم فني 24/7",
        "ضمان التفعيل"
      ],
      popular: true,
      keywords: "اشتراكات شات جي بي تي بلس في اليمن GPT Plus Yemen"
    },
    {
      id: 2,
      nameAr: "اشتراك شات جي بي تي – حساب خاص بالإيميل الشخصي – شهر",
      nameEn: "GPT Private Email Plan – 1 Month",
      price: "10",
      currency: "USD",
      description: "اشتراك شات جي بي تي خاص بإيميلك الشخصي. خصوصية كاملة وأمان مضمون.",
      features: [
        "تفعيل على إيميلك الشخصي",
        "خصوصية كاملة",
        "اشتراكات جي بي تي شهرية",
        "دعم مخصص"
      ],
      popular: false,
      keywords: "اشتراكات جي بي تي شهرية GPT monthly Yemen"
    },
    {
      id: 3,
      nameAr: "اشتراك كانفا – سنة",
      nameEn: "Canva Pro Subscription – 1 Year",
      price: "3",
      currency: "USD",
      description: "اشتراك كانفا برو في اليمن لسنة كاملة. أدوات تصميم احترافية بأقل سعر.",
      features: [
        "صور ومقاطع لا محدودة",
        "إزالة الخلفية",
        "اشتراكات كانفا في اليمن",
        "تصدير عالي الجودة"
      ],
      popular: false,
      keywords: "اشتراكات كانفا في اليمن Canva Pro Yemen"
    },
    {
      id: 4,
      nameAr: "اشتراك دوولينجو – سنة",
      nameEn: "Duolingo Super Subscription – 1 Year",
      price: "3",
      currency: "USD",
      description: "اشتراك دوولينجو في اليمن لتعلم اللغات بدون إعلانات وقلوب لا محدودة.",
      features: [
        "بدون إعلانات",
        "قلوب لا محدودة",
        "اشتراكات دوولينجو في اليمن",
        "تعلم دون إنترنت"
      ],
      popular: false,
      keywords: "اشتراكات دوولينجو في اليمن Duolingo Super Yemen"
    }
  ];

  const reviews = [
    {
      name: "أحمد محمد",
      location: "صنعاء",
      rating: 5,
      comment: "خدمة ممتازة! حصلت على اشتراك شات جي بي تي بلس في اليمن خلال دقائق. أنصح الجميع بالتعامل معهم."
    },
    {
      name: "فاطمة علي",
      location: "عدن",
      rating: 5,
      comment: "أفضل متجر اشتراكات رقمية اليمن! السعر ممتاز والخدمة سريعة جداً."
    },
    {
      name: "محمد الحسني",
      location: "تعز",
      rating: 5,
      comment: "حصلت على اشتراك كانفا برو بسعر رائع. التفعيل كان فورياً والدعم الفني ممتاز."
    },
    {
      name: "سارة أحمد",
      location: "الحديدة",
      rating: 5,
      comment: "اشتراك دوولينجو يعمل بشكل مثالي! شكراً لكم على الخدمة المميزة."
    },
    {
      name: "عبدالله سالم",
      location: "إب",
      rating: 5,
      comment: "متجر موثوق 100%. حصلت على جميع اشتراكاتي منهم بأسعار لا تقاوم."
    },
    {
      name: "نور الدين",
      location: "مأرب",
      rating: 5,
      comment: "خدمة عملاء رائعة ودعم فني متاح 24/7. أنصح بشدة!"
    }
  ];

  const blogPosts = [
    {
      slug: "chatgpt-plus-yemen",
      title: "أفضل طريقة للحصول على اشتراك شات جي بي تي بلس في اليمن",
      excerpt: "دليل شامل للحصول على اشتراك شات جي بي تي بلس في اليمن بأفضل الأسعار وأسرع خدمة."
    },
    {
      slug: "canva-pro-yemen",
      title: "كيفية تفعيل اشتراك كانفا برو في اليمن",
      excerpt: "تعلم كيفية الحصول على اشتراك كانفا برو في اليمن وابدأ التصميم الاحترافي اليوم."
    },
    {
      slug: "duolingo-super-yemen",
      title: "طريقة شراء اشتراك دوولينجو في اليمن",
      excerpt: "احصل على اشتراك دوولينجو سوبر في اليمن وتعلم اللغات بدون قيود."
    }
  ];

  const getWhatsAppUrl = (productName: string) => {
    const message = `مرحباً، أريد شراء: ${productName}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const generalWhatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن الاشتراكات الرقمية")}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary seo-heading">
              متجر الاشتراكات الرقمية في اليمن
            </h1>
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 seo-heading">
            أول متجر اشتراكات رقمية في اليمن
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            احصل على اشتراكات شات جي بي تي بلس في اليمن، اشتراكات كانفا في اليمن، واشتراكات دوولينجو في اليمن بأفضل الأسعار
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-lg">
              <Zap className="w-6 h-6" />
              <span>تفعيل فوري</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Shield className="w-6 h-6" />
              <span>دفع آمن</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Headphones className="w-6 h-6" />
              <span>دعم 24/7</span>
            </div>
          </div>
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            اطلب عبر واتساب
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 seo-heading">
              اشتراكاتنا الرقمية
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نوفر أفضل اشتراكات شات جي بي تي بلس في اليمن، اشتراكات كانفا في اليمن، واشتراكات دوولينجو في اليمن
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="product-card relative overflow-hidden">
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-orange-500 text-white">
                      الأكثر طلباً
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-right leading-tight">
                    {product.nameAr}
                  </CardTitle>
                  <p className="text-sm text-gray-500 text-right">
                    {product.nameEn}
                  </p>
                  <div className="text-3xl font-bold text-primary text-center mt-4">
                    ${product.price}
                    <span className="text-sm text-gray-500 font-normal"> / {product.id <= 2 ? 'شهر' : 'سنة'}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-right">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-right">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={getWhatsAppUrl(product.nameAr)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn w-full text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    اطلب عبر واتساب
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              جميع الطلبات تتم عبر واتساب فقط - لا يوجد سلة تسوق
            </p>
            <p className="text-sm text-gray-500">
              الكلمات المفتاحية: متجر اشتراكات رقمية اليمن، اشتراكات شات جي بي تي بلس في اليمن، اشتراكات كانفا في اليمن، اشتراكات دوولينجو في اليمن، اشتراكات جي بي تي شهرية
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 seo-heading">
              من نحن
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              نحن أول متجر اشتراكات رقمية في اليمن، متخصصون في توفير اشتراكات شات جي بي تي بلس في اليمن، 
              اشتراكات كانفا برو في اليمن، واشتراكات دوولينجو في اليمن بأفضل الأسعار وأسرع خدمة.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">تفعيل سريع</h3>
                <p className="text-gray-600">تفعيل جميع الاشتراكات خلال 5-15 دقيقة من الطلب</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">عملاء راضون</h3>
                <p className="text-gray-600">أكثر من 1000 عميل راضٍ في جميع أنحاء اليمن</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">جودة مضمونة</h3>
                <p className="text-gray-600">ضمان التفعيل أو استرداد المبلغ كاملاً</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 seo-heading">
              تعليقات وآراء العملاء
            </h2>
            <p className="text-xl text-gray-600">
              ماذا يقول عملاؤنا عن خدماتنا في اليمن
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-right leading-relaxed">
                    "{review.comment}"
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 seo-heading">
              مقالات مفيدة
            </h2>
            <p className="text-xl text-gray-600">
              دلائل شاملة للحصول على أفضل الاشتراكات الرقمية في اليمن
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-right leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-right">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">
                      اقرأ المقال
                      <ArrowRight className="w-4 h-4 mr-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            جاهز للبدء؟
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            تواصل معنا الآن عبر واتساب واحصل على اشتراكك الرقمي بأفضل الأسعار في اليمن
          </p>
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            تواصل معنا الآن
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              متجر الاشتراكات الرقمية في اليمن
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              أول وأفضل متجر للاشتراكات الرقمية في اليمن. نوفر اشتراكات شات جي بي تي بلس، كانفا برو، ودوولينجو سوبر بأفضل الأسعار.
            </p>
            <div className="flex justify-center items-center gap-4 mb-6">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                +967738382876
              </a>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 متجر الاشتراكات الرقمية في اليمن. جميع الحقوق محفوظة.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                الكلمات المفتاحية: اشتراكات شات جي بي تي بلس في اليمن، اشتراكات كانفا في اليمن، اشتراكات دوولينجو في اليمن، اشتراكات جي بي تي شهرية، متجر اشتراكات رقمية اليمن
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
