FROM "typesense/typesense:30.1"

CMD ["--data-dir", "/data", "--api-key=$TYPESENSE_ADMIN_API_KEY", "--enable-cors"]
