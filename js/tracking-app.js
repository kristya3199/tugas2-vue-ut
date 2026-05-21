const { createApp } = Vue;

createApp({

    data() {

        return {

            selectedPaket: "",

            searchDO: "",

            hasilTracking: null,

            daftarPaket: [

                {
                    kode: "PAKET-UT-001",
                    nama: "Paket IPS Dasar",
                    harga: 120000
                },

                {
                    kode: "PAKET-UT-002",
                    nama: "Paket Matematika",
                    harga: 150000
                },

                {
                    kode: "PAKET-UT-003",
                    nama: "Paket Bahasa Inggris",
                    harga: 175000
                }

            ],

            form: {

                nim: "",
                nama: "",
                ekspedisi: "",
                tanggal: ""

            },

            deliveryOrders: [

                {
                    no_do: "DO2025-001",
                    nim: "123456789",
                    nama: "Rina Wulandari",
                    ekspedisi: "JNE Regular",
                    paket: "PAKET-UT-001",
                    tanggal: "2025-05-17",
                    total: 120000
                }

            ]

        };

    },

    methods: {

        generateDO() {

            let nomor = this.deliveryOrders.length + 1;

            return `DO2025-${String(nomor).padStart(3, '0')}`;

        },

        tambahDO() {

            if (
                !this.form.nim ||
                !this.form.nama ||
                !this.form.ekspedisi ||
                !this.form.tanggal ||
                !this.selectedPaket
            ) {

                alert("Semua data wajib diisi!");

                return;
            }

            const dataBaru = {

                no_do: this.generateDO(),

                nim: this.form.nim,

                nama: this.form.nama,

                ekspedisi: this.form.ekspedisi,

                paket: this.selectedPaket.kode,

                tanggal: this.form.tanggal,

                total: this.selectedPaket.harga

            };

            this.deliveryOrders.push(dataBaru);

            alert("Delivery Order berhasil ditambahkan!");

            this.form = {

                nim: "",
                nama: "",
                ekspedisi: "",
                tanggal: ""

            };

            this.selectedPaket = "";

        },

        cariDO() {

            this.hasilTracking = this.deliveryOrders.find(

                item => item.no_do === this.searchDO

            );

            if (!this.hasilTracking) {

                alert("Nomor DO tidak ditemukan!");

            }

        }

    }

}).mount("#app");