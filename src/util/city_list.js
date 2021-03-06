const cities= [
    {
        "SehirAdi": "ADANA",
        "SehirAdiEn": "ADANA",
        "SehirID": "500"
    },
    {
        "SehirAdi": "ADIYAMAN",
        "SehirAdiEn": "ADIYAMAN",
        "SehirID": "501"
    },
    {
        "SehirAdi": "AFYONKARAHİSAR",
        "SehirAdiEn": "AFYONKARAHISAR",
        "SehirID": "502"
    },
    {
        "SehirAdi": "AĞRI",
        "SehirAdiEn": "AGRI",
        "SehirID": "503"
    },
    {
        "SehirAdi": "AKSARAY",
        "SehirAdiEn": "AKSARAY",
        "SehirID": "504"
    },
    {
        "SehirAdi": "AMASYA",
        "SehirAdiEn": "AMASYA",
        "SehirID": "505"
    },
    {
        "SehirAdi": "ANKARA",
        "SehirAdiEn": "ANKARA",
        "SehirID": "506"
    },
    {
        "SehirAdi": "ANTALYA",
        "SehirAdiEn": "ANTALYA",
        "SehirID": "507"
    },
    {
        "SehirAdi": "ARDAHAN",
        "SehirAdiEn": "ARDAHAN",
        "SehirID": "508"
    },
    {
        "SehirAdi": "ARTVİN",
        "SehirAdiEn": "ARTVIN",
        "SehirID": "509"
    },
    {
        "SehirAdi": "AYDIN",
        "SehirAdiEn": "AYDIN",
        "SehirID": "510"
    },
    {
        "SehirAdi": "BALIKESİR",
        "SehirAdiEn": "BALIKESIR",
        "SehirID": "511"
    },
    {
        "SehirAdi": "BARTIN",
        "SehirAdiEn": "BARTIN",
        "SehirID": "512"
    },
    {
        "SehirAdi": "BATMAN",
        "SehirAdiEn": "BATMAN",
        "SehirID": "513"
    },
    {
        "SehirAdi": "BAYBURT",
        "SehirAdiEn": "BAYBURT",
        "SehirID": "514"
    },
    {
        "SehirAdi": "BİLECİK",
        "SehirAdiEn": "BILECIK",
        "SehirID": "515"
    },
    {
        "SehirAdi": "BİNGÖL",
        "SehirAdiEn": "BINGOL",
        "SehirID": "516"
    },
    {
        "SehirAdi": "BİTLİS",
        "SehirAdiEn": "BITLIS",
        "SehirID": "517"
    },
    {
        "SehirAdi": "BOLU",
        "SehirAdiEn": "BOLU",
        "SehirID": "518"
    },
    {
        "SehirAdi": "BURDUR",
        "SehirAdiEn": "BURDUR",
        "SehirID": "519"
    },
    {
        "SehirAdi": "BURSA",
        "SehirAdiEn": "BURSA",
        "SehirID": "520"
    },
    {
        "SehirAdi": "ÇANAKKALE",
        "SehirAdiEn": "CANAKKALE",
        "SehirID": "521"
    },
    {
        "SehirAdi": "ÇANKIRI",
        "SehirAdiEn": "CANKIRI",
        "SehirID": "522"
    },
    {
        "SehirAdi": "ÇORUM",
        "SehirAdiEn": "CORUM",
        "SehirID": "523"
    },
    {
        "SehirAdi": "DENİZLİ",
        "SehirAdiEn": "DENIZLI",
        "SehirID": "524"
    },
    {
        "SehirAdi": "DİYARBAKIR",
        "SehirAdiEn": "DIYARBAKIR",
        "SehirID": "525"
    },
    {
        "SehirAdi": "DÜZCE",
        "SehirAdiEn": "DUZCE",
        "SehirID": "526"
    },
    {
        "SehirAdi": "EDİRNE",
        "SehirAdiEn": "EDIRNE",
        "SehirID": "527"
    },
    {
        "SehirAdi": "ELAZIĞ",
        "SehirAdiEn": "ELAZIG",
        "SehirID": "528"
    },
    {
        "SehirAdi": "ERZİNCAN",
        "SehirAdiEn": "ERZINCAN",
        "SehirID": "529"
    },
    {
        "SehirAdi": "ERZURUM",
        "SehirAdiEn": "ERZURUM",
        "SehirID": "530"
    },
    {
        "SehirAdi": "ESKİŞEHİR",
        "SehirAdiEn": "ESKISEHIR",
        "SehirID": "531"
    },
    {
        "SehirAdi": "GAZİANTEP",
        "SehirAdiEn": "GAZIANTEP",
        "SehirID": "532"
    },
    {
        "SehirAdi": "GİRESUN",
        "SehirAdiEn": "GIRESUN",
        "SehirID": "533"
    },
    {
        "SehirAdi": "GÜMÜŞHANE",
        "SehirAdiEn": "GUMUSHANE",
        "SehirID": "534"
    },
    {
        "SehirAdi": "HAKKARİ",
        "SehirAdiEn": "HAKKARI",
        "SehirID": "535"
    },
    {
        "SehirAdi": "HATAY",
        "SehirAdiEn": "HATAY",
        "SehirID": "536"
    },
    {
        "SehirAdi": "IĞDIR",
        "SehirAdiEn": "IGDIR",
        "SehirID": "537"
    },
    {
        "SehirAdi": "ISPARTA",
        "SehirAdiEn": "ISPARTA",
        "SehirID": "538"
    },
    {
        "SehirAdi": "İSTANBUL",
        "SehirAdiEn": "ISTANBUL",
        "SehirID": "539"
    },
    {
        "SehirAdi": "İZMİR",
        "SehirAdiEn": "IZMIR",
        "SehirID": "540"
    },
    {
        "SehirAdi": "KAHRAMANMARAŞ",
        "SehirAdiEn": "KAHRAMANMARAS",
        "SehirID": "541"
    },
    {
        "SehirAdi": "KARABÜK",
        "SehirAdiEn": "KARABUK",
        "SehirID": "542"
    },
    {
        "SehirAdi": "KARAMAN",
        "SehirAdiEn": "KARAMAN",
        "SehirID": "543"
    },
    {
        "SehirAdi": "KARS",
        "SehirAdiEn": "KARS",
        "SehirID": "544"
    },
    {
        "SehirAdi": "KASTAMONU",
        "SehirAdiEn": "KASTAMONU",
        "SehirID": "545"
    },
    {
        "SehirAdi": "KAYSERİ",
        "SehirAdiEn": "KAYSERI",
        "SehirID": "546"
    },
    {
        "SehirAdi": "KİLİS",
        "SehirAdiEn": "KILIS",
        "SehirID": "547"
    },
    {
        "SehirAdi": "KIRIKKALE",
        "SehirAdiEn": "KIRIKKALE",
        "SehirID": "548"
    },
    {
        "SehirAdi": "KIRKLARELİ",
        "SehirAdiEn": "KIRKLARELI",
        "SehirID": "549"
    },
    {
        "SehirAdi": "KIRŞEHİR",
        "SehirAdiEn": "KIRSEHIR",
        "SehirID": "550"
    },
    {
        "SehirAdi": "KOCAELİ",
        "SehirAdiEn": "KOCAELI",
        "SehirID": "551"
    },
    {
        "SehirAdi": "KONYA",
        "SehirAdiEn": "KONYA",
        "SehirID": "552"
    },
    {
        "SehirAdi": "KÜTAHYA",
        "SehirAdiEn": "KUTAHYA",
        "SehirID": "553"
    },
    {
        "SehirAdi": "MALATYA",
        "SehirAdiEn": "MALATYA",
        "SehirID": "554"
    },
    {
        "SehirAdi": "MANİSA",
        "SehirAdiEn": "MANISA",
        "SehirID": "555"
    },
    {
        "SehirAdi": "MARDİN",
        "SehirAdiEn": "MARDIN",
        "SehirID": "556"
    },
    {
        "SehirAdi": "MERSİN",
        "SehirAdiEn": "MERSIN",
        "SehirID": "557"
    },
    {
        "SehirAdi": "MUĞLA",
        "SehirAdiEn": "MUGLA",
        "SehirID": "558"
    },
    {
        "SehirAdi": "MUŞ",
        "SehirAdiEn": "MUS",
        "SehirID": "559"
    },
    {
        "SehirAdi": "NEVŞEHİR",
        "SehirAdiEn": "NEVSEHIR",
        "SehirID": "560"
    },
    {
        "SehirAdi": "NİĞDE",
        "SehirAdiEn": "NIGDE",
        "SehirID": "561"
    },
    {
        "SehirAdi": "ORDU",
        "SehirAdiEn": "ORDU",
        "SehirID": "562"
    },
    {
        "SehirAdi": "OSMANİYE",
        "SehirAdiEn": "OSMANIYE",
        "SehirID": "563"
    },
    {
        "SehirAdi": "RİZE",
        "SehirAdiEn": "RIZE",
        "SehirID": "564"
    },
    {
        "SehirAdi": "SAKARYA",
        "SehirAdiEn": "SAKARYA",
        "SehirID": "565"
    },
    {
        "SehirAdi": "SAMSUN",
        "SehirAdiEn": "SAMSUN",
        "SehirID": "566"
    },
    {
        "SehirAdi": "ŞANLIURFA",
        "SehirAdiEn": "SANLIURFA",
        "SehirID": "567"
    },
    {
        "SehirAdi": "SİİRT",
        "SehirAdiEn": "SIIRT",
        "SehirID": "568"
    },
    {
        "SehirAdi": "SİNOP",
        "SehirAdiEn": "SINOP",
        "SehirID": "569"
    },
    {
        "SehirAdi": "ŞIRNAK",
        "SehirAdiEn": "SIRNAK",
        "SehirID": "570"
    },
    {
        "SehirAdi": "SİVAS",
        "SehirAdiEn": "SIVAS",
        "SehirID": "571"
    },
    {
        "SehirAdi": "TEKİRDAĞ",
        "SehirAdiEn": "TEKIRDAG",
        "SehirID": "572"
    },
    {
        "SehirAdi": "TOKAT",
        "SehirAdiEn": "TOKAT",
        "SehirID": "573"
    },
    {
        "SehirAdi": "TRABZON",
        "SehirAdiEn": "TRABZON",
        "SehirID": "574"
    },
    {
        "SehirAdi": "TUNCELİ",
        "SehirAdiEn": "TUNCELI",
        "SehirID": "575"
    },
    {
        "SehirAdi": "UŞAK",
        "SehirAdiEn": "USAK",
        "SehirID": "576"
    },
    {
        "SehirAdi": "VAN",
        "SehirAdiEn": "VAN",
        "SehirID": "577"
    },
    {
        "SehirAdi": "YALOVA",
        "SehirAdiEn": "YALOVA",
        "SehirID": "578"
    },
    {
        "SehirAdi": "YOZGAT",
        "SehirAdiEn": "YOZGAT",
        "SehirID": "579"
    },
    {
        "SehirAdi": "ZONGULDAK",
        "SehirAdiEn": "ZONGULDAK",
        "SehirID": "580"
    }
];

export default cities;