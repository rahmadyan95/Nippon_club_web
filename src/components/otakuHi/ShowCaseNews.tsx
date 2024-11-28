const articles = [
    {
      id: 1,
      title: "TUYU untuk Menghapus Semua Musik yang Ditulis oleh Pusu ",
      description:
        "Grup musik Jepang TUYU mengumumkan bahwa mereka akan menghapus semua musik yang ditulis oleh Pusu (Maya Yano) pada 31 Desember 2024, menyusul penangkapan gitaris utama dan komposer tersebut karena percobaan pembunuhan yang terjadi awal tahun ini.",
      image: "https://www.menuguildsystem.com/wp-content/uploads/2024/11/tuyu.jpg", // Ganti dengan link gambar
      category: "J-NEWS", // Kategori
      date: "November 28, 2024", // Tanggal publish
      link: "https://example.com/tuyu" // Link artikel
    },
    {
      id: 2,
      title: "Violet Evergarden: The Movie mengisahkan Violet yang menyampaikan surat perpisahan terakhirnya",
      description:
        "Violet Evergarden: The Movie adalah film kedua yang diadaptasi dari serial anime Jepang terkenal dengan judul yang sama. Film ini mengisahkan Violet Evergarden (Yui Ishikawa), seorang boneka kenangan otomatis yang bekerja di Kantor Pos C.H.",
      image: "https://cdn.animenewsnetwork.com/thumbnails/max500x600/encyc/A19665-92424272.1540127945.jpg", // Ganti dengan link gambar
      category: "ANIME", // Kategori
      date: "November 25, 2024", // Tanggal publish
      link: "https://example.com/violet-evergarden-movie" // Link artikel
    },
    {
      id: 3,
      title: 'Game Fate/Grand Order Arcade Tidak Lagi Menambahkan Servant Baru',
      description:
        'Situs web resmi untuk game Fate/Grand Order Arcade dari Type-Moon mengungkapkan pada hari Rabu bahwa mereka tidak akan lagi menambahkan karakter Servant yang dapat dimainkan. Meskipun demikian, game ini akan tetap melanjutkan pembaruan untuk keseimbangan permainan dan acara terbatas baru.',
      image: "https://cdn.animenewsnetwork.com/thumbnails/fit500x500/cms/game-review/135738/00.jpg", // Ganti dengan link gambar
      category: "GAME", // Kategori
      date: "November 20, 2024", // Tanggal publish
      link: "https://example.com/fate-grand-order-arcade" // Link artikel
    },
    // Tambahkan 3 data lainnya
  ];
  
  const NewsGrid = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 lg:px-10">
        {articles.map((article) => (
          <a key={article.id} href={article.link} target="_blank" rel="noopener noreferrer" className="border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-200">
            <div className="group">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="p-4">
                {/* Kategori dan Tanggal */}
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">{article.category}</span> • {article.date}
                </div>
                {/* Judul Artikel */}
                <h3 className="font-semibold text-lg text-gray-800">{article.title}</h3>
                {/* Deskripsi Artikel */}
                <p className="text-sm text-gray-600 mt-2">{article.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  };
  
  export default NewsGrid;
  