# Life RPG — Premium PWA

Kendi hayatını küçük, ölçülebilir görevlerle bir RPG ilerleme sistemine dönüştüren Türkçe, mobil öncelikli bir web uygulaması.

## Özellikler
- Sade, göz yormayan koyu yeşil / grafit premium arayüz
- XP, seviye ve unvan sistemi
- Günlük ve tek seferlik görevler; kategoriye göre filtreleme ve arama
- Görev oluşturma, düzenleme, silme ve tamamlama geri alma
- 25 dakikalık odak sayacı; uygulama kapalıyken de geçen süreyi hesaba katar
- Günlük kısa not / günlük kaydı
- Son 7 gün görünümü, yetenek alanları, başarımlar ve hareket geçmişi
- JSON yedek alma ve geri yükleme
- Çevrimdışı kullanım için service worker
- Veriler cihazda saklanır; bir sunucuya gönderilmez

## GitHub Pages'e yükleme
1. GitHub'da `real-life-rpg` adında **Public** bir depo oluştur.
2. Bu ZIP'in içindeki `index.html`, `manifest.json`, `sw.js`, `README.md` dosyalarını ve `icons` klasörünü deponun **ana dizinine** yükle.
3. Depoda **Settings → Pages** bölümünü aç.
4. `Deploy from a branch` seç; branch `main`, klasör `/ (root)` olsun ve kaydet.
5. Yayınlandıktan sonra `https://KULLANICI-ADIN.github.io/real-life-rpg/` adresinden aç.
6. iPhone'da Safari ile açıp **Paylaş → Ana Ekrana Ekle** seçeneğini kullan.

## Veri ve gizlilik
İlerleme `localStorage` üzerinde, o tarayıcı / cihazda saklanır. Tarayıcı verilerini silmek ilerlemeyi silebilir; bu yüzden Profil ekranından ara sıra JSON yedeği al.
