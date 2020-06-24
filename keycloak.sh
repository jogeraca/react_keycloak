#!/bin/bash

# requires https://stedolan.github.io/jq/download/

# config
KEYCLOAK_URL=http://localhost:8080/auth
KEYCLOAK_REALM="examples"
KEYCLOAK_CLIENT_ID=app-web-react
KEYCLOAK_CLIENT_SECRET="jsnow"
USER_ID="jsnow"

export TKN=$(curl -X POST "${KEYCLOAK_URL}/realms/${KEYCLOAK_REALM}/protocol/openid-connect/token" \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d "username=${USER_ID}" \
 -d "password=${KEYCLOAK_CLIENT_SECRET}" \
 -d 'grant_type=password' \
 -d "client_id=${KEYCLOAK_CLIENT_ID}" | jq -r '.access_token')

echo ""
echo $TKN
echo

CLIENT_SECRET='37f628e0-6899-4890-b1af-18be78939ade'
CLIENT=auctions
#curl -X GET http://localhost:8080/protected
  #-H "Authorization: Bearer $TKN"
curl -k -v \
     -X POST \
     -u "${CLIENT}:${CLIENT_SECRET}" \
     -d "token=${TKN}" \
     "${KEYCLOAK_URL}/realms/$KEYCLOAK_REALM/protocol/openid-connect/token/introspect" | jq .

#curl -X GET "${KEYCLOAK_URL}/admin/realms/${KEYCLOAK_REALM}/protocol/openid-connect/userinfo" \
     #-H "Authorization: Bearer ${TKN}" | jq

###### # -H \"Accept: application/json\" \
# -H \"Authorization: Bearer $TKN\" | jq .



