FROM "typesense/typesense:30.1"

CMD ["--data-dir", "--api-key=$TYPESENSE_ADMIN_API_KEY", "/data", "--enable-cors"]
