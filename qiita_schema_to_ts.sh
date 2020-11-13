quicktype https://qiita.com/api/v2/schema  -o src/types/QiitaTypes.d.ts -s schema --top-level QiitaAPI
sed -i '' "s/| number | number |/| number |/g" src/types/QiitaTypes.d.ts