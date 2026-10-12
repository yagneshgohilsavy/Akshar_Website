migrate((app) => {
 let existing;
 try { existing = app.findCollectionByNameOrId('healthcare_enquiries'); } catch (_) { existing = null; }
 if (existing) return;
 app.save(new Collection({ name: 'healthcare_enquiries', type: 'base', listRule: null, viewRule: null, createRule: '', updateRule: null, deleteRule: null, fields: [
 { name: 'name', type: 'text', required: true, max: 120 },
 { name: 'phone', type: 'text', required: true, min: 10, max: 25 },
 { name: 'email', type: 'email' },
 { name: 'company', type: 'text', max: 200 },
 { name: 'enquiry_type', type: 'select', required: true, maxSelect: 1, values: ['OHC partnership', 'Diagnostic enquiry'] },
 { name: 'package_name', type: 'text', max: 200 },
 { name: 'collection_mode', type: 'select', maxSelect: 1, values: ['Clinic visit', 'Home sample collection', 'Factory health camp'] },
 { name: 'message', type: 'text', max: 2500 },
 { name: 'consent', type: 'bool', required: true },
 { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
 { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true }
 ] }));
}, (app) => { app.delete(app.findCollectionByNameOrId('healthcare_enquiries')); });
