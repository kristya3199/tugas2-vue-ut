const app = Vue.createApp({

    data() {

        return {

            bahanAjar: [

                {
                    kode: "EKMA4116",
                    judul: "Pengantar Manajemen",
                    kategori: "MK Wajib",
                    upbjj: "Jakarta",
                    lokasiRak: "R1-A3",
                    harga: 65000,
                    qty: 28,
                    safety: 5,
                    catatan: "Edisi 2024, cetak ulang"
                },

                {
                    kode: "EKMA4115",
                    judul: "Pengantar Akuntansi",
                    kategori: "MK Wajib",
                    upbjj: "Jakarta",
                    lokasiRak: "R1-A4",
                    harga: 60000,
                    qty: 7,
                    safety: 5,
                    catatan: "Cover baru"
                },

                {
                    kode: "BIOL4201",
                    judul: "Biologi Umum",
                    kategori: "Praktikum",
                    upbjj: "Surabaya",
                    lokasiRak: "R3-B2",
                    harga: 80000,
                    qty: 12,
                    safety: 5,
                    catatan: "Butuh pendingin"
                },

                {
                    kode: "FISIP4001",
                    judul: "Dasar Sosiologi",
                    kategori: "MK Pilihan",
                    upbjj: "Makassar",
                    lokasiRak: "R2-C1",
                    harga: 55000,
                    qty: 2,
                    safety: 5,
                    catatan: "Stok menipis"
                }

            ],

            form: {

                kode: "",
                judul: "",
                kategori: "",
                upbjj: "",
                lokasiRak: "",
                harga: "",
                qty: "",
                safety: "",
                catatan: ""

            },

            filterUpbjj: "",
            filterKategori: "",
            sortBy: ""

        }

    },

    computed: {

        filteredData() {

            let data = [...this.bahanAjar];

            if (this.filterUpbjj) {

                data = data.filter(
                    item => item.upbjj === this.filterUpbjj
                );

            }

            if (this.filterKategori) {

                data = data.filter(
                    item => item.kategori === this.filterKategori
                );

            }

            if (this.sortBy === "stok") {

                data.sort((a, b) => a.qty - b.qty);

            }

            if (this.sortBy === "judul") {

                data.sort(
                    (a, b) => a.judul.localeCompare(b.judul)
                );

            }

            if (this.sortBy === "harga") {

                data.sort((a, b) => a.harga - b.harga);

            }

            return data;

        }

    },

    methods: {

        tambahData() {

            this.bahanAjar.push({

                kode: this.form.kode,
                judul: this.form.judul,
                kategori: this.form.kategori,
                upbjj: this.form.upbjj,
                lokasiRak: this.form.lokasiRak,
                harga: Number(this.form.harga),
                qty: Number(this.form.qty),
                safety: Number(this.form.safety),
                catatan: this.form.catatan

            });

            this.form = {

                kode: "",
                judul: "",
                kategori: "",
                upbjj: "",
                lokasiRak: "",
                harga: "",
                qty: "",
                safety: "",
                catatan: ""

            }

        },

        editData(item) {

            let stokBaru = prompt(
                "Edit jumlah stok:",
                item.qty
            );

            if (stokBaru !== null) {

                item.qty = Number(stokBaru);

            }

            this.form = {

                kode: "",
                judul: "",
                kategori: "",
                upbjj: "",
                lokasiRak: "",
                harga: "",
                qty: "",
                safety: "",
                catatan: ""

            }

        },

        tambahStok(item) {

            item.qty += 10;

        },

        getStatus(qty, safety) {

            if (qty <= 0) {

                return "Kosong";

            }

            else if (qty <= safety) {

                return "Menipis";

            }

            else {

                return "Aman";

            }

        },

        getStatusClass(qty, safety) {

            if (qty <= 0) {

                return "status-kosong";

            }

            else if (qty <= safety) {

                return "status-menipis";

            }

            else {

                return "status-aman";

            }

        }

    }

});

app.mount("#app");