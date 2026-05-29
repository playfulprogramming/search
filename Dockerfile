FROM "typesense/typesense:30.2"

CMD ["--data-dir", "/data", "--enable-cors"]
