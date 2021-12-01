<template lang="pug">
div
    input(type="file" @change="beforeUpload" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded")
div(class="mx-auto")
    div(class="bg-white shadow-md rounded my-6" v-if="data.length > 0")
        table(class="text-left w-full border-collapse")
            thead
                tr
                    th(
                        v-for="key in Object.keys(data[0])"
                        :key="key"
                        class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                    ) {{ key }}

            tbody
                tr(
                    v-for="(n, id) in data" :key="n.Name"
                    class="hover:bg-grey-lighter"
                )
                    td(
                        v-for="val in n"
                        class="py-4 px-6 border-b border-grey-light"
                    ) {{ val }}
</template>

<script>
import XLSX from 'xlsx'
import { readFile } from '@/plugins/readFile.js'

export default {
    data () {
        return {
            data: []
        }
    },
    methods: {
        async beforeUpload (file) {
            // 有的套件, 像element的導入數據選擇，必須要添加.raw才能獲取，其他表單不需要
            // console.log(file.raw)
            
            let dataBinary = await readFile(file)
            let workBook = XLSX.read(dataBinary, {type: 'binary', cellDates: true})
            // 以下取第一筆資料表
            // let workSheet = workBook.Sheets[workBook.SheetNames[0]]
            //
            // 以下是依資料表名取得
            let SheetName = 'hello_vue'
            let workSheet = workBook.Sheets[SheetName]
            const data = XLSX.utils.sheet_to_json(workSheet)
            console.log(data)
            this.data = data
        }
    }
}
</script>