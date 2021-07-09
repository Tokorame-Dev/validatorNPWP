// import database kantor pelayanan pajak
const db =  require('./kpp');

const npwp = (string, desc = false) => {
    let npwp = string;

    try {
        // validate pattern
        if (npwp[2] != '.' || npwp[6] != '.' || npwp[10] != '.' || npwp[12] != '-' || npwp[16] != '.') {
            throw new Error('format input tidak tepat');
        }
        // clean the string
        npwp = npwp.replace(/[^0-9]+/g,'');

        // validate the string
        if (npwp.length !== 15 || npwp[0] != 0 || npwp[1] == 0) {
            throw new Error('tidak valid')
        }

        // get second digit from the string
        let identitas_wajib_pajak = npwp.substring(1, 2);
        // get the last 3 of the string
        let status_wajib_pajak = npwp.substring(npwp.length - 3);
        // get 3 number after - character
        let kode_kpp = string.slice(13, 16);

        if (identitas_wajib_pajak <= 3) {
            identitas_wajib_pajak = 'Wajib Pajak Badan';
        } else if (identitas_wajib_pajak == 4 || identitas_wajib_pajak == 6) {
            identitas_wajib_pajak = 'Wajib Pajak Pengusaha';
        } else if (identitas_wajib_pajak == 5) {
            identitas_wajib_pajak = 'Wajib Pajak Karyawan';
        } else if (identitas_wajib_pajak <= 9) {
            identitas_wajib_pajak = 'Wajib Pajak Orang Pribadi';
        } else {
            throw new Error('tidak valid')
        }

        if (status_wajib_pajak == '000') {
            status_wajib_pajak = 'Tunggal/Pusat'
        } else {
            status_wajib_pajak = 'Cabang'
        }

        // return this if second parameter is true
        if (desc) {
            return {
                status: 'success',
                no_npwp: string,
                desc: {
                    identitas_wajib_pajak,
                    status_wajib_pajak,
                    kpp: {
                        nama_kantor: db[kode_kpp] ? db[kode_kpp].nama_kantor : '',
                        alamat: db[kode_kpp] ? db[kode_kpp].alamat : '',
                    }
                }
            };
        }

        // return true if second parameter is false or not defined
        return true;

    } catch (error) {
        if (desc) {
            return error.message;
        }

        return false;
    }
}

module.exports = npwp;