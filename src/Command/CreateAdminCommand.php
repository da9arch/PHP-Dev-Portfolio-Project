<?php

namespace App\Command;

use App\Entity\User;
use App\Constants\UserRole;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;

class CreateAdminCommand extends Command
{
    protected static $defaultName = 'make:admin';

    private UserPasswordHasherInterface $passwordHasher;
    private EntityManagerInterface $entityManager;

    public function __construct(UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager)
    {
        $this->passwordHasher = $passwordHasher;
        $this->entityManager = $entityManager;

        parent::__construct();
    }

    protected function configure(): void
    {
        $this->setDescription('Creates a new user.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $helper = $this->getHelper('question');

        $question = new Question('Please enter the username: ');
        $username = $helper->ask($input, $output, $question);

        $question = new Question('Please enter the email: ');
        $email = $helper->ask($input, $output, $question);

        $question = new Question('Please enter the password: ');
        $password = $helper->ask($input, $output, $question);

        $question = new Question('Please enter the role (user/admin): ');
        $role = $helper->ask($input, $output, $question);

        $user = new User();
        $user->setUsername($username);
        $user->setEmail($email);
        $user->setRoles([$role === 'admin' ? UserRole::ADMIN : UserRole::USER]);
        $user->setPassword($this->passwordHasher->hashPassword($user, $password));

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $output->writeln('Success created ' . $role . ' user with username "' . $username . '" and password "' . $password . '"!');

        return Command::SUCCESS;
    }
}
