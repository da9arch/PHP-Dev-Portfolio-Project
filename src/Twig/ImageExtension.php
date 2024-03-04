<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class ImageExtension extends AbstractExtension
{

    public function __construct(
        #[Autowire('%uploaded_images_dir%')]
        private string $imagesDir
    )
    {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('imageExists', [$this, 'imageExists']),
        ];
    }

    public function imageExists(string $imageName): bool
    {
        $filesystem = new Filesystem();

        return $filesystem->exists($this->imagesDir . '/' . $imageName);
    }
}
