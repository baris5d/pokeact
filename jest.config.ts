export default {
    coverageDirectory: 'coverage/jest',
    testEnvironment: 'jsdom',
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    transform: {
        '^.+\\.(ts|js)x?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(css|scss|jpg|png|svg)$': '<rootDir>/empty-module.js',
    },
};
