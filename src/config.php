<?php

use Sami\Sami;
use Sami\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('tests')
    ->in($dir = 'vendor/standardlibrary/')
;

return new Sami($iterator, array(
    'theme'                => 'main',
    'title'                => 'Standard Library',
    'build_dir'            => 'docs',
    // use a custom theme directory (this works if you install your dependencies in vendor/ folder)
    'template_dirs'        => array(
        __DIR__.'/themes/main/',
    ),
    'default_opened_level' => 2,
));
