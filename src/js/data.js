const historyData = [
    {
        "era": "Era Kolonial",
        "title": "1822 - 1939: Era Kolonial",
        "description": "Berawal dari inisiatif Gubernur Jendral Van Der Capellen pada 1822 untuk mendukung Armada Laut Kerajaan Belanda. Pada 1939, galangan resmi dibuka dengan nama Marine Establishment (ME) dan menjadi yang terbesar di Asia.",
        "image": "src/images/history/kolonial.jpg"
    },
    {
        "era": "Era Pendudukan",
        "title": "1942 - 1945: Era Pendudukan Jepang",
        "description": "Pada tahun 1942, ME dikuasai Jepang dan namanya diubah menjadi Nagamatsu Butai, lalu Kaigunse 21-24 Butai. Jepang juga mendirikan pelatihan militer ala PETA bernama Hokodan.",
        "image": "src/images/history/pendudukan.jpg"
    },
    {
        "era": "Orde Lama",
        "title": "1945 - 1960an: Era Orde Lama & Nasionalisasi",
        "description": "Setelah Proklamasi 1945, aset galangan diserahkan ke pemerintah Indonesia dan dinasionalisasi, berganti nama menjadi Penataran Angkatan Laut (PAL). PAL menjadi bagian dari upaya membangun kekuatan maritim nasional.",
        "image": "src/images/history/nasionalisasi.jpg"
    },
    {
        "era": "Orde Baru",
        "title": "1980 - Era Modern PT. PAL",
        "description": "Pada 15 April 1980, perusahaan resmi bertransformasi menjadi PT PAL Indonesia (Persero) melalui PP No. 4 Tahun 1980. Kemudian pada tahun 1985, diresmikan oleh Presiden Soeharto sebagai galangan kapal modern.",
        "image": "src/images/history/modern.jpg"
    }
];

const productsData = {
    "niaga": [
        {
            "id": "niaga-01", "year": 1985, "name": "MT Minas & MT Melahin",
            "image": "src/images/products/niaga/mt_minas.jpg",
            "specs": "Tipe/Kelas: Tanker Minyak\nPemesan: Pertamina\nBobot Mati: 3.500 DWT\nKeterangan: Bagian dari program pengadaan kapal tanker untuk memperkuat armada distribusi energi nasional."
        },
        {
            "id": "niaga-02", "year": 1992, "name": "MT Kurau",
            "image": "src/images/products/niaga/mt_kurau.jpg",
            "specs": "Tipe/Kelas: Tanker Minyak\nPemesan: Pertamina\nBobot Mati: 6.500 DWT\nKeterangan: Menandai peningkatan kapasitas produksi tanker oleh PT PAL."
        },
        {
            "id": "niaga-03", "year": 2000, "name": "MT Palu Sipat",
            "image": "src/images/products/niaga/mt_palusipat.jpg",
            "specs": "Tipe/Kelas: Tanker Minyak\nPemesan: Pertamina\nBobot Mati: 17.500 DWT\nKeterangan: Lompatan signifikan dalam kemampuan pembangunan kapal tanker."
        },
        {
            "id": "niaga-04", "year": 2005, "name": "MT Pagerungan & MT P. Brandan",
            "image": "src/images/products/niaga/mt_pagerungan.jpg",
            "specs": "Tipe/Kelas: Tanker Minyak\nBobot Mati: 17.500 DWT\nKeterangan: Melanjutkan produksi kapal tanker kelas 17.500 DWT, menunjukkan standardisasi desain."
        }
    ],
    "militer": [
        {
            "id": "militer-01", "year": 2007, "name": "KRI Makassar (590)",
            "image": "src/images/products/militer/kri_makassar.jpg",
            "specs": "Tipe/Kelas: Landing Platform Dock (LPD)\nPemesan: TNI Angkatan Laut\nSpesifikasi: Panjang 122m, Kapasitas 35 kendaraan, 3 helikopter, 500+ personel.\nKeterangan: Kapal LPD pertama yang dibuat PT PAL, menjadi tulang punggung operasi amfibi."
        },
        {
            "id": "militer-02", "year": 2009, "name": "KRI Banjarmasin (592)",
            "image": "src/images/products/militer/kri_banjarmasin.jpg",
            "specs": "Tipe/Kelas: Landing Platform Dock (LPD)\nPemesan: TNI Angkatan Laut\nKeterangan: Kapal kedua dari kelas Makassar yang diproduksi di dalam negeri."
        },
        {
            "id": "militer-03", "year": 2011, "name": "KRI Banda Aceh (593)",
            "image": "src/images/products/militer/kri_bandaaceh.jpg",
            "specs": "Tipe/Kelas: Landing Platform Dock (LPD)\nPemesan: TNI Angkatan Laut\nSpesifikasi: Panjang 125 meter, dengan beberapa penyempurnaan dari generasi sebelumnya.\nKeterangan: Dianggap sebagai LPD generasi lanjutan."
        },
        {
            "id": "militer-04", "year": 2013, "name": "KRI Sampari (628)",
            "image": "src/images/products/militer/kri_sampari.jpg",
            "specs": "Tipe/Kelas: Kapal Cepat Rudal (KCR-60M)\nPemesan: TNI Angkatan Laut\nSpesifikasi: Panjang 60m, Kecepatan 28 knot, Rudal anti-kapal.\nKeterangan: Kapal pertama dari kelas KCR-60M andalan TNI AL."
        },
        {
            "id": "militer-05", "year": 2014, "name": "KRI Tombak (629) & KRI Halasan (630)",
            "image": "src/images/products/militer/kri_tombak.jpg",
            "specs": "Tipe/Kelas: Kapal Cepat Rudal (KCR-60M)\nPemesan: TNI Angkatan Laut\nKeterangan: KRI Halasan (630) memiliki persenjataan yang lebih kuat dan modern dibandingkan dua kapal pertama (Batch I)."
        },
        {
            "id": "militer-06", "year": 2016, "name": "BRP Tarlac (LD-601)",
            "image": "src/images/products/militer/brp_tarlac.jpg",
            "specs": "Tipe/Kelas: Strategic Sealift Vessel (SSV)\nPemesan: Angkatan Laut Filipina\nSpesifikasi: Panjang 123m, Kapasitas 500+ pasukan, 2 LCU, 2-3 helikopter.\nKeterangan: Kapal perang terbesar pertama yang berhasil diekspor oleh Indonesia."
        },
        {
            "id": "militer-07", "year": 2016, "name": "KRI R.E. Martadinata (331)",
            "image": "src/images/products/militer/kri_rem.jpg",
            "specs": "Tipe/Kelas: Fregat PKR / SIGMA 10514\nPemesan: TNI Angkatan Laut\nPersenjataan: Meriam 76mm, Exocet MM40, VL MICA, Torpedo.\nKeterangan: Fregat paling modern TNI AL, dibangun melalui transfer teknologi."
        },
        {
            "id": "militer-08", "year": 2017, "name": "Kapal Selam Kelas Nagapasa",
            "image": "src/images/products/militer/ks_nagapasa.jpg",
            "specs": "Tipe/Kelas: Kapal Selam Serang / Type 209/1400\nPemesan: TNI Angkatan Laut\nPersenjataan: 8 tabung torpedo 533mm untuk torpedo Black Shark & rudal Harpoon.\nKeterangan: Proyek kerja sama dengan DSME Korea Selatan, menandai transfer teknologi kapal selam."
        },
        {
            "id": "militer-09", "year": 2018, "name": "KRI Kerambit (627)",
            "image": "src/images/products/militer/kri_kerambit.jpg",
            "specs": "Tipe/Kelas: Kapal Cepat Rudal (KCR-60M) - Batch II\nPemesan: TNI Angkatan Laut\nKeterangan: Versi modifikasi dari KCR-60M Batch I dengan penyempurnaan pada desain dan sistem tempur."
        },
        {
            "id": "militer-10", "year": 2018, "name": "KRI Semarang (594)",
            "image": "src/images/products/militer/kri_semarang.jpg",
            "specs": "Tipe/Kelas: LPD / Kapal Bantu Rumah Sakit\nPemesan: TNI Angkatan Laut\nFasilitas Medis: Setara rumah sakit tipe C (UGD, ICU, Ruang Operasi).\nKeterangan: Berfungsi ganda sebagai kapal angkut amfibi dan kapal bantu rumah sakit."
        },
        {
            "id": "militer-11", "year": 2022, "name": "KRI dr. Radjiman Wedyodiningrat (992)",
            "image": "src/images/products/militer/kri_radjiman.jpg",
            "specs": "Tipe/Kelas: Kapal Bantu Rumah Sakit (BRS)\nPemesan: TNI Angkatan Laut\nKeterangan: Generasi lanjutan dalam kelengkapan fasilitas medis, berbasis platform LPD."
        },
        {
            "id": "militer-12", "year": 2023, "name": "KRI Kapak (625) & KRI Panah (626)",
            "image": "src/images/products/militer/kri_kapak.jpg",
            "specs": "Tipe/Kelas: Kapal Cepat Rudal (KCR-60M) - Batch III\nPemesan: TNI Angkatan Laut\nDesain: Menggunakan desain stealth yang lebih baik dari batch sebelumnya.\nKeterangan: KCR-60M generasi termutakhir dengan kemampuan tempur yang ditingkatkan."
        }
    ]
};