new Vue({

    el: '#app',

    data: {

        kategoriList: [
            "MK Wajib",
            "MK Pilihan",
            "Praktikum"
        ],

        upbjjList: [
            "Jakarta",
            "Surabaya",
            "Makassar"
        ],

        stokData: [

            {
                kode: "EKMA4116",
                judul: "Pengantar Manajemen",
                kategori: "MK Wajib",
                upbjj: "Jakarta",
                lokasiRak: "R1-A3",
                harga: 65000,
                qty: 28,
                safety: 20,
                catatanHTML: "<i>Edisi 2024, cetak ulang</i>"
            },

            {
                kode: "EKMA4115",
                judul: "Pengantar Akuntansi",
                kategori: "MK Wajib",
                upbjj: "Jakarta",
                lokasiRak: "R1-A4",
                harga: 60000,
                qty: 7,
                safety: 15,
                catatanHTML: "<b>Cover baru</b>"
            },

            {
                kode: "BIOL4201",
                judul: "Biologi Umum",
                kategori: "Praktikum",
                upbjj: "Surabaya",
                lokasiRak: "R3-B2",
                harga: 80000,
                qty: 12,
                safety: 10,
                catatanHTML: "Butuh <u>pendingin</u>"
            },

            {
                kode: "FISIP4001",
                judul: "Dasar Sosiologi",
                kategori: "MK Pilihan",
                upbjj: "Makassar",
                lokasiRak: "R2-C1",
                harga: 55000,
                qty: 2,
                safety: 8,
                catatanHTML: "Stok <i>menipis</i>"
            }

        ],

        selectedUPBJJ: "",
        selectedKategori: "",
        sortBy: "",

        form: {

            kode: "",
            judul: "",
            kategori: "",
            upbjj: "",
            lokasiRak: "",
            harga: "",
            qty: "",
            safety: "",
            catatanHTML: ""

        }

    },

    computed: {

        filteredStok(){

            let data = this.stokData;

            // FILTER UPBJJ

            if(this.selectedUPBJJ != ""){

                data = data.filter(item =>
                    item.upbjj == this.selectedUPBJJ
                );

            }

            // FILTER KATEGORI

            if(this.selectedKategori != ""){

                data = data.filter(item =>
                    item.kategori == this.selectedKategori
                );

            }

            // SORT

            if(this.sortBy == "judul"){

                data.sort((a,b)=>
                    a.judul.localeCompare(b.judul)
                );

            }

            else if(this.sortBy == "qty"){

                data.sort((a,b)=>
                    a.qty - b.qty
                );

            }

            else if(this.sortBy == "harga"){

                data.sort((a,b)=>
                    a.harga - b.harga
                );

            }

            return data;

        }

    },

    methods: {

        tambahData(){

            if(

                this.form.kode == "" ||
                this.form.judul == "" ||
                this.form.kategori == "" ||
                this.form.upbjj == "" ||
                this.form.lokasiRak == "" ||
                this.form.harga == "" ||
                this.form.qty == "" ||
                this.form.safety == ""

            ){

                alert("Semua field wajib diisi");

                return;

            }

            this.stokData.push({

                kode: this.form.kode,
                judul: this.form.judul,
                kategori: this.form.kategori,
                upbjj: this.form.upbjj,
                lokasiRak: this.form.lokasiRak,
                harga: parseInt(this.form.harga),
                qty: parseInt(this.form.qty),
                safety: parseInt(this.form.safety),
                catatanHTML: this.form.catatanHTML

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
                catatanHTML: ""

            };

        },

        // EDIT STOK

        editStok(item){

            const jumlahBaru =
                prompt(
                    "Edit jumlah stok:",
                    item.qty
                );

            if(jumlahBaru !== null){

                item.qty = parseInt(jumlahBaru);

            }

        },

        // RESTOK

        restok(item){

            item.qty += 10;

        }

    }

});