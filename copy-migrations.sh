#!/bin/sh

echo "Copying prisma migration files..."

MIGRATIONS_TARGET=${CONFIGURATION_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}

rm -rf "$MIGRATIONS_TARGET/migrations"
mkdir "$MIGRATIONS_TARGET/migrations"
cp -r ${SRCROOT}/../prisma/migrations ${MIGRATIONS_TARGET}

echo "migration files copied ✅"