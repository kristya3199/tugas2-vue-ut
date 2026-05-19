new Vue({

    el: '#app',

    data: {

        pengirimanList: [

            {
                kode: "REG",
                nama: "JNE Regular"
            },

            {
                kode: "EXP",
                nama: "JNE Express"
            },

            {
                kode: "POS",
                nama: "POS Indonesia"
            }

        ],

        paket: [

            {
                kode: "PAKET-UT-001",
                harga: 120000
            },

            {
                kode: "PAKET-UT-002",
                harga: 140000
            }

        ],

        deliveryOrder: [

            {
                noDO: "DO2025-001",
                nim: "123456789",
                nama: "Rina Wulandari",
                ekspedisi: "JNE Regular",
                paket: "PAKET-UT-001",
                tanggal: "2025-05-17",
                total: 120000
            }

        ],

        form: {

            nim: "",
            nama: "",
            ekspedisi: "",
            paket: "",
            tanggal: ""

        }

    },

    methods: {

        tambahDO(){

            if(

                this.form.nim == "" ||
                this.form.nama == "" ||
                this.form.ekspedisi == "" ||
                this.form.paket == "" ||
                this.form.tanggal == ""

            ){

                alert("Semua field wajib diisi");

                return;

            }

            const nomorBaru =
                "DO2025-00" + (this.deliveryOrder.length + 1);

            let hargaPaket = 0;

            const cariPaket =
                this.paket.find(
                    p => p.kode == this.form.paket
                );

            if(cariPaket){

                hargaPaket = cariPaket.harga;

            }

            this.deliveryOrder.push({

                noDO: nomorBaru,

                nim: this.form.nim,

                nama: this.form.nama,

                ekspedisi: this.form.ekspedisi,

                paket: this.form.paket,

                tanggal: this.form.tanggal,

                total: hargaPaket

            });

            this.form = {

                nim: "",
                nama: "",
                ekspedisi: "",
                paket: "",
                tanggal: ""

            };

        }

    }

});