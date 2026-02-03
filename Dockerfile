FROM "typesense/typesense:30.1"

CMD ["--data-dir", "/data", "--enable-cors"]
