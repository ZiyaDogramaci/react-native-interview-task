# React Native Developer Task

### Uygulama aşağıdaki özelliklere sahip olmalıdır:

1.  Uygulama bir instagram uygulaması klonu olmalıdır. Şu an için aşağıya doğru kayar liste halinde post’lar gözükmelidir. Postlar 2 adet görsel ya da 1 adet videodan oluşmalı; görselli sağa sola swipe yapılabilmelidir.
    
2.  Uygulamanın bir login ekranı olmalıdır. Login ekranında girilen bilgiler güvenli bir yerde saklanmalıdır.
    
3.  Ekranın üst bölümünde search bar alanı olmalı. Search’e tıklandığında görseller ve videolar grid şeklinde basılmalı ve aşağıya doğru scroll edilebilmelidir. Arama rastgele biçimde yapılabilir, özellikle bir algoritmaya ihtiyaç yoktur.
    
4.  Örnek videoları ​[https://www.pexels.com/videos/](https://www.pexels.com/videos/)​ linkinden seçebilirsiniz. Search anında grid içinde bu videolar oynamalıdır (küçültülmüş şekilde). Görsellerin ve videoların detay sayfasına ihtiyaç yoktur.
    
5.  Uygulamanın veri alışverişini yapacak API’ını mock API ile gerçekleyebilirsiniz. Gerçek bir API ihtiyacı bulunmamaktadır. Login ekranında girilen herhangi bir input başarılı sonuç verip, kullanıcıyı içeriye alabilir.
    
6.  Uygulama tamamen custom component yapısı ile oluşturulmalıdır. Ekran kodlarında sadece yazmış olduğunuz component’leri kullanarak ilerleyiniz.
    
7.  Uygulama içerisindeki görsellerin boyutu ​en az​ 10 MB olmalıdır. Bu görseller basılırken, herhangi bir CPU ya da UI thread düşmesi gözlemlenmemelidir. (​[https://sample-videos.com/download-sample-jpg-image.php](https://sample-videos.com/download-sample-jpg-image.php%E2%80%8B)​ gibi sitelerdeki linklerden büyük görseller için yararlanabilirsiniz.)
    
8.  Uygulama React Hooks yapısı ile kodlanmalıdır.
    
9.  Uygulama her türlü ekran boyutuna ve çözünürlüğüne uyumlu olacak şekilde kodlanmalıdır.

### Dikkat:​ Uygulamaları geliştirirken aşağıdaki konulara özen gösterilmelidir:

-	Platform: Çalışmanın yapılacağı platformu tanıdığınıza emin olunuz.
-   Over Design: Problemi en basit ve sade şekli ile çözmeye çalışınız. Gerçek hayatta karşılaştığımız problemlerdeki gibi zaman sınırı bulunmaktadır. Sadelik prensipleriyle bu zaman sınırına uygun olarak çözünüz.
-   İletişim: Projede anlamadığınız, emin olmadığınız yerleri **SORUNUZ**.
-   Kolay okunur ve anlaşılır kod yazmaya özen gösteriniz. Gerekli yerlere yorumlar eklemeyi unutmayınız.    
-   Teknik mimari. Çözümün teknik mimarisini geliştirirken sade ve kolay anlaşılır bir yapı kurmaya çalışınız.
-   Kapsam. Uygulamanın yukarıda belirtilen bütün kapsam maddelerini **TAM** ve **EKSİKSİZ** olarak yaptığınıza emin olunuz.    
-   Uygulamayı direkt olarak store’lara çıkabilecekmiş gibi hazırlamanız gerekmektedir. Gerekli testleri yapılmış, bug’lar olabildiğince temizlenmiş ve ios için archive, android için aab sorunsuz olarak alınabiliyor olmalıdır. 
