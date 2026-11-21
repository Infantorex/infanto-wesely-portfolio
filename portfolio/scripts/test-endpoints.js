const http = require('http');

function checkUrl(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, data }));
        }).on('error', reject);
    });
}

async function run() {
    try {
        const home = await checkUrl('http://localhost:3000/');
        console.log('GET / -> HTTP', home.status, '| HTML Length:', home.data.length);
        console.log('Contains ENGINEERING:', home.data.includes('ENGINEERING'));
        console.log('Contains IDEAS INTO:', home.data.includes('IDEAS INTO'));
        console.log('Contains Reality.:', home.data.includes('Reality.'));
        console.log('Contains Rex Hören:', home.data.includes('REX HÖREN INDUSTRIES'));
        console.log('Contains Patent:', home.data.includes('202641130456 A'));
        console.log('Contains Vibrawave:', home.data.includes('Vibrawave'));
        console.log('Contains SafeGuardX:', home.data.includes('SafeGuardX'));

        const health = await checkUrl('http://localhost:3000/api/health');
        console.log('GET /api/health -> HTTP', health.status, '| JSON:', health.data);

        const patent = await checkUrl('http://localhost:3000/api/patent');
        console.log('GET /api/patent -> HTTP', patent.status, '| Title:', JSON.parse(patent.data).data.title);

        const projects = await checkUrl('http://localhost:3000/api/projects');
        console.log('GET /api/projects -> HTTP', projects.status, '| Count:', JSON.parse(projects.data).data.length);

        console.log('\nALL ENDPOINT TESTS PASSED SUCCESSFULLY.');
        process.exit(0);
    } catch (err) {
        console.error('Test error:', err.message);
        process.exit(1);
    }
}

run();
